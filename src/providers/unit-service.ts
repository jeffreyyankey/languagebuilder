import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';

@Injectable()
export class UnitService {

	constructor( private af: AngularFire ) {}

	getAll(): FirebaseListObservable<any> {
		return this.af.database.list('/units');
	}
}
