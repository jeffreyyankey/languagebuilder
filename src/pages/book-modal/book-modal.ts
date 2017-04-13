import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { UnitService } from '../../providers/unit-service';

import { GlobalVars }from '../../providers/global-vars';

@Component({
  selector: 'page-book-modal',
  templateUrl: 'book-modal.html'
})
export class BookModalPage {
	displayPage1:boolean;
	displayPage2:boolean;
	displayPage3:boolean;
	units;
	options = {source: 'book', unit: 'all', questions: 'all'};

  constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public us: UnitService,
		public gv: GlobalVars,
		public viewCtrl: ViewController
		) {
			this.gv.setAllUnitLength();
			us.getAll()
			.subscribe(data => {
				this.units = data;
		})

		this.displayPage1 = true;
	}

	changePage(param1, param2, param3) {
		this.displayPage1 = param1;
		this.displayPage2 = param2;
		this.displayPage3 = param3;
		// console.log(this.displayPage1, this.displayPage2, this.displayPage3)
	}

	submit() {
		this.viewCtrl.dismiss(this.options);
	}
}
