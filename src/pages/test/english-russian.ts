import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AlertController, ModalController } from 'ionic-angular';

import { WordService } from '../../providers/word-service';
import { Subject } from 'rxjs/Subject';

import { GlobalVars }from '../../providers/global-vars';
import { BookModalPage } from '../book-modal/book-modal';

@Component({
	selector: 'page-english-russian',
	templateUrl: 'english-russian.html'
})

export class EnglishRussianTestPage {
	rpCheckboxOpen: boolean;
	unitSubject: Subject<any>;

	words;
	currentWordNumber:number = 0;
	showAnswer: boolean = false;
	showFinal: boolean = false;

	constructor(
		private af: AngularFire,
		private ac: AlertController,
		public gv: GlobalVars,
		public mc: ModalController,
		private ws: WordService
	) {
		let modal = this.mc.create( BookModalPage );
		modal.present();
		modal.onDidDismiss(data => {
			console.log(data);
		})
	}

	showCurrentAnswer() {
		this.showAnswer = true;
	}

	nextWord() {
		this.showAnswer = false;

		if ( this.currentWordNumber < this.words.length - 1 ) {
			this.currentWordNumber++;
		} else {
			this.showFinal = false;
		}
	}

	shuffle(a:any[]) {
		for (let i = a.length; i; i--) {
				let j = Math.floor(Math.random() * i);
				[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
}
