import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnglishPage } from '../english/english';
import { RussianPage } from '../russian/russian';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	itemTapped(event, page) {
		if (page === 'english') {
			this.navCtrl.push(EnglishPage);
		}
		if (page === 'russian') {
			this.navCtrl.push(RussianPage);
		}
	}
}
