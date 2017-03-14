import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
	selector: 'page-russian',
	templateUrl: 'russian.html'
})

export class RussianPage {
	words: FirebaseListObservable<any>;
	sizeSubject: Subject<any>;

	constructor(af: AngularFire) {
		this.sizeSubject = new Subject();
		this.words = af.database.list('/words', {
			query: {
				orderByChild: 'Unit',
				equalTo: this.sizeSubject
			}
		});
	}
	filterBy(size: number) {
		this.sizeSubject.next(size);
	}
}
