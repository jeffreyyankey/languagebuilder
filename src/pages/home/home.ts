import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EnglishRussianReviewPage } from '../review/russian';
import { EnglishRussianTestPage } from '../test/russian';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	itemTapped(event, page) {
		if (page === 'russian_book_review') {
			this.navCtrl.push(EnglishRussianReviewPage);
		}
		if (page === 'english_russian_book_test') {
			this.navCtrl.push(EnglishRussianTestPage);
		}
		if (page === 'russian_english_book_test') {
			this.navCtrl.push(EnglishRussianTestPage);
		}
	}
}
