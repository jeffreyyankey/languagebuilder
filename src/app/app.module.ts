import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {GlobalVars} from '../providers/global-vars';
import { UnitService } from '../providers/unit-service';

import { HomePage } from '../pages/home/home';
import { EnglishPage } from '../pages/english/english';
import { RussianPage } from '../pages/russian/russian';

// Import the AF2 Module
import { AngularFireModule } from 'angularfire2';

// AF2 Settings
export const firebaseConfig = {
	apiKey: "AIzaSyDOpQrgN_VGcc07rKHWhJlRUY3Zx2JTPp8",
	authDomain: "languagebuilder-87d81.firebaseapp.com",
	databaseURL: "https://languagebuilder-87d81.firebaseio.com",
	storageBucket: "languagebuilder-87d81.appspot.com",
	messagingSenderId: "345834922127"
};

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		EnglishPage,
		RussianPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(firebaseConfig)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		EnglishPage,
		RussianPage
	],
	providers: [
		[GlobalVars],
		[UnitService],
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
