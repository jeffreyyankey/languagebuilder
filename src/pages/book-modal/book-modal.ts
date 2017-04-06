import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { UnitService } from '../../providers/unit-service';

import { GlobalVars }from '../../providers/global-vars';

@Component({
  selector: 'page-book-modal',
  templateUrl: 'book-modal.html'
})
export class BookModalPage {
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
	}

	dismiss() {
		this.viewCtrl.dismiss(this.options);
	}
}
