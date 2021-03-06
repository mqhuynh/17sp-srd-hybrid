import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SearchPage } from '../pages/search/search';
import { ListPage } from '../pages/list/list';
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../providers/complete-test-service';
import { ApiService } from '../providers/api-service';
import {HeaderBar} from '../components/header-bar'
import {FormatHttpLinkPipe} from '../pipes/formatHttpLink'
import { IonicAudioModule } from 'ionic-audio';



@NgModule({
  declarations: [
    MyApp,
    SearchPage,
    ListPage,
    HeaderBar,
    FormatHttpLinkPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AutoCompleteModule,
    IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SearchPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CompleteTestService,
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
