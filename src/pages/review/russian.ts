import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { UnitService } from '../../providers/unit-service';
import { WordService } from '../../providers/word-service';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class RussianReviewPage {
	rpCheckboxOpen: boolean;
	words: FirebaseListObservable<any>;
	unitSubject: Subject<any>;
	units;

	constructor(
		private af: AngularFire,
		private ac: AlertController,
		private us: UnitService,
		private ws: WordService
	) {
		us.getAll()
		.subscribe(data => {
			this.units = data;
		})
	}

	showCheckbox() {
		let alert = this.ac.create();
		alert.setTitle( 'Which Unit(s)?' );

		alert.addInput({
			type: 'radio',
			label: 'All',
			value: 'all',
			checked: true
		});

		for( let unit of this.units ) {
			alert.addInput({
				type: 'radio',
				label: unit.title,
				value: unit.unit,
				checked: false
			});
		}

		alert.addButton( 'Cancel' );
		alert.addButton({
			text: 'Okay',
			handler: data => {
				this.unitSubject = data;
				this.rpCheckboxOpen = false;
				if (data === 'all') {
					this.words = this.ws.getAll();
				}
				else {
					this.words = this.ws.getUnit(this.unitSubject);
				}
			}
		});

		alert.present().then(() => {
			this.rpCheckboxOpen = true;
		});
	}
}
