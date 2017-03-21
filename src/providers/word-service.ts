import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WordService {

	constructor( private af: AngularFire ) {}

	getAll(): FirebaseListObservable<any> {
		return this.af.database.list('/words');
	}

	getUnit( unitSubject: Subject<any> ): FirebaseListObservable<any> {
		return this.af.database.list('/words', {
			query: {
				orderByChild: 'unit',
				equalTo: unitSubject
			}
		});
	}
}
