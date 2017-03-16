import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { GlobalVars } from '../../providers/global-vars';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class RussianPage {
	testCheckboxOpen: boolean;
	testCheckboxResult;

	units: FirebaseListObservable<any>;
	words: FirebaseListObservable<any>;

	constructor(af: AngularFire, public ac: AlertController, public gv: GlobalVars) {
		this.units = af.database.list('/units/');
		this.words = af.database.list('/words/');

		console.log('units', this.units);
		console.log('words', this.words);
		console.log('gv', gv.myGlobalVar);
	}

	showCheckbox() {
		let alert = this.ac.create();
		alert.setTitle('Which Units to Include?');

		alert.addInput({
			type: 'checkbox',
			label: 'Unit 02',
			value: '02',
			checked: true
		});

		alert.addInput({
			type: 'checkbox',
			label: 'Unit 03',
			value: '03',
			checked: true
		});

		alert.addButton('Cancel');
		alert.addButton({
			text: 'Okay',
			handler: data => {
				console.log('Checkbox data:', data);
				this.testCheckboxOpen = false;
				this.testCheckboxResult = data;
			}
		});

		alert.present().then(() => {
			this.testCheckboxOpen = true;
		});
	}
}
