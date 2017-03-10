import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})
export class RussianPage {

	public words: Array<string>;

	constructor(public navCtrl: NavController, public navParams: NavParams) {

	}
}
