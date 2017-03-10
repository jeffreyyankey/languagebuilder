import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { HomePage } from '../pages/home/home';
import { EnglishPage } from '../pages/english/english';
import { RussianPage } from '../pages/russian/russian';

const cloudSettings: CloudSettings = {
	'core': {
		'app_id': '1999c77b'
	}
};

@NgModule({
	declarations: [
		MyApp,
		Page1,
		Page2,
		HomePage,
		EnglishPage,
		RussianPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		CloudModule.forRoot(cloudSettings)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Page1,
		Page2,
		HomePage,
		EnglishPage,
		RussianPage
	],
	providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
