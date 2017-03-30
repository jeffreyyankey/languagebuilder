import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { AlertController } from 'ionic-angular';
import { UnitService } from '../../providers/unit-service';
import { WordService } from '../../providers/word-service';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class EnglishRussianTestPage {
	rpCheckboxOpen: boolean;
	unitSubject: Subject<any>;
	units;

	words;
	currentWordNumber:number = 0;
	showAnswer: boolean = false;
	showFinal: boolean = false;

	constructor(
		private af: AngularFire,
		private ac: AlertController,
		private us: UnitService,
		private ws: WordService
	) {
		us.getAll()
		.subscribe(data => {
			this.units = data;
		})
	}

	showCheckbox() {
		let alert = this.ac.create();
		alert.setTitle( 'Which Unit(s)?' );

		alert.addInput({
			type: 'radio',
			label: 'All',
			value: 'all',
			checked: true
		});

		for( let unit of this.units ) {
			alert.addInput({
				type: 'radio',
				label: unit.title,
				value: unit.unit,
				checked: false
			});
		}

		alert.addButton( 'Cancel' );
		alert.addButton({
			text: 'Okay',
			handler: data => {
				this.unitSubject = data;
				this.rpCheckboxOpen = false;
				if (data === 'all') {
					this.ws.getAll()
					.subscribe( response => {
						this.words = response;
						this.shuffle(this.words);
					})
				}
				else {
					this.ws.getUnit( this.unitSubject )
					.subscribe( response => {
						this.words = response;
						this.shuffle(this.words);
					})
				}
			}
		});

		alert.present().then(() => {
			this.rpCheckboxOpen = true;
		});
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
