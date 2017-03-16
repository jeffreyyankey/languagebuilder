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

	constructor(
		private ac: AlertController,
		private units: GlobalVars,
		private us: UnitService,
	) {
	}

	getAllWords() {
		this.words = this.us.getAll();
		console.log('words', this.words);
	}

	getUnitWords(unit:Subject<string>) {
		this.words = this.us.getUnit();
		console.log('words', this.words);
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
				console.log('data', data);
				this.rpCheckboxOpen = false;
				if (data === 'all') {
					this.getAllWords();
				}
				else {
					this.getUnitWords(data);
				}
			}
		});

		alert.present().then(() => {
			this.rpCheckboxOpen = true;
		});
	}
}
