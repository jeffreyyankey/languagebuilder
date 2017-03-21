import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RussianReviewPage } from '../review/russian';
import { RussianTestPage } from '../test/russian';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	itemTapped(event, page) {
		if (page === 'russian_book_review') {
			this.navCtrl.push(RussianReviewPage);
		}
		if (page === 'russian_book_test') {
			this.navCtrl.push(RussianTestPage);
		}
	}
}
