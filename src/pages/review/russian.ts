import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { ModalController } from 'ionic-angular';

import { WordService } from '../../providers/word-service';
import { Subject } from 'rxjs/Subject';

import { GlobalVars }from '../../providers/global-vars';
import { BookModalPage } from '../book-modal/book-modal';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class EnglishRussianReviewPage {
	unitSubject: Subject<any>;

	words;
	questionLimit:number;

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
					if (this.words.length > Number(data.questions)) {
						this.questionLimit = Number(data.questions);
					} else {
						this.questionLimit = this.words.length;
					}
				})
			}
		})
	}
}
