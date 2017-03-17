import { Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global-vars';
import { UnitService } from '../../providers/unit-service';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class RussianPage {
	rpCheckboxOpen: boolean;
	words: FirebaseListObservable<any>;
	unitSubject: Subject<any>;

	constructor(
		private af: AngularFire,
		private ac: AlertController,
		private units: GlobalVars,
		private us: UnitService,
	){
	}

	showCheckbox() {
		let alert = this.ac.create();
		alert.setTitle('Which Units to Include?');

		alert.addInput({
				type: 'radio',
				label: 'All',
				value: 'all',
				checked: true
			});

		for(let unit of this.units.unitsAvailable) {
			alert.addInput({
				type: 'radio',
				label: unit.title,
				value: unit.unit,
				checked: false
			});
		}

		alert.addButton('Cancel');
		alert.addButton({
			text: 'Okay',
			handler: data => {
				this.unitSubject = data;
				this.rpCheckboxOpen = false;
				if (data === 'all') {
					this.words = this.us.getAll();
				}
				else {
					this.words = this.us.getUnit(this.unitSubject);
				}
			}
		});

		alert.present().then(() => {
			this.rpCheckboxOpen = true;
		});
	}
}
