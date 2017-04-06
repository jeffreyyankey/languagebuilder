import { Injectable } from '@angular/core';
import { WordService } from './word-service';

@Injectable()
export class GlobalVars {

	unitsAvailable: any;
	unitLength = [];
	items;

	constructor(
		private ws: WordService
	) {
		// this.unitsAvailable = [
		// 	{ title: 'Unit 02', unit: '02', checked: true},
		// 	{ title: 'Unit 03', unit: '03', checked: true},
		// 	{ title: 'Unit 04', unit: '04', checked: true},
		// 	{ title: 'Unit 05', unit: '05', checked: true},
		// 	{ title: 'Unit 07', unit: '07', checked: true},
		// 	{ title: 'Unit 08', unit: '08', checked: true},
		// 	{ title: 'Unit 09', unit: '09', checked: true},
		// 	{ title: 'Unit 10', unit: '10', checked: true},
		// 	{ title: 'Unit 11', unit: '11', checked: true}
		// ]
	}

	// setMyGlobalVar(value) {
	// 	this.unitsAvailable = value;
	// }

	// getMyGlobalVar() {
	// 	return this.unitsAvailable;
	// }

	setAllUnitLength() {
		this.items = this.ws.getUnitLength()
		.subscribe(snapshots => {
			snapshots.forEach(snapshot => {
				this.unitLength.push(snapshot.val().unit);
			});
		})
	}

	getAllUnitLength(): string {
		return this.unitLength.length.toString();
	}

	getUnitLength(unit:string): string {
		let unitNumber = this.unitLength.reduce(function(n, val) {
			return n + (val == unit);
		}, 0);

		return unitNumber;
	}
}
