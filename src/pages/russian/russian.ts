import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class RussianPage {

	words: FirebaseListObservable<any>;

	constructor(public navCtrl: NavController, public navParams: NavParams, af: AngularFire) {
		this.words = af.database.list('/words');
	}
}
