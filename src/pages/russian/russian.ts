import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Database } from '@ionic/cloud-angular';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})
export class RussianPage {

	public words: Array<string>;

	constructor(public navCtrl: NavController, public navParams: NavParams, public db: Database) {
		this.db.connect();
		this.db.collection('words').watch().subscribe( (response) => {
			this.words = response;
		}, (error) => {
			console.error(error);
		});
	}
}
