import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ModalController } from 'ionic-angular';

import { WordService } from '../../providers/word-service';
import { Subject } from 'rxjs/Subject';

import { GlobalVars }from '../../providers/global-vars';
import { BookModalPage } from '../book-modal/book-modal';

@Component({
	selector: 'page-english-russian',
	templateUrl: 'english-russian.html'
})

export class EnglishRussianTestPage {
	unitSubject: Subject<any>;

	words;
	questionLimit:number;
	currentWordNumber:number = 0;
	showAnswer: boolean = false;
	showFinal: boolean = false;

	constructor(
		private af: AngularFire,
		public gv: GlobalVars,
		public mc: ModalController,
		private ws: WordService
	) {
		let modal = this.mc.create( BookModalPage );
		modal.present();
		modal.onDidDismiss( data => {
			// console.log(data);
			if (data.unit === 'all') {
				this.ws.getAll()
				.subscribe( response => {
					this.words = response;
					this.shuffle(this.words);
					if (this.words.length > Number(data.questions)) {
						this.questionLimit = Number(data.questions);
					} else {
						this.questionLimit = this.words.length;
					}
				})
			}
			else {
				this.ws.getUnit( this.unitSubject )
				.subscribe( response => {
					this.words = response;
					this.shuffle(this.words);
					if (this.words.length > Number(data.questions)) {
						this.questionLimit = Number(data.questions);
					} else {
						this.questionLimit = this.words.length;
					}
				})
			}
		})
	}

	showCurrentAnswer() {
		this.showAnswer = true;
	}

	nextWord() {
		this.showAnswer = false;

		if ( this.currentWordNumber < this.questionLimit - 1 ) {
			this.currentWordNumber++;
		} else {
			this.showFinal = true;
		}
	}

	shuffle(a:any[]) {
		for (let i = a.length; i; i--) {
				let j = Math.floor(Math.random() * i);
				[a[i - 1], a[j]] = [a[j], a[i - 1]];
		}
	}
}
