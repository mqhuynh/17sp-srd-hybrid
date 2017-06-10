import { Component, ViewEncapsulation} from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SearchPage } from '../pages/search/search';
import { ListPage} from '../pages/list/list';

import {ApiService} from '../providers/api-service'
import C from '../config'

@Component({
  templateUrl: 'app.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
a{
    color: ${C.colors.link_text};
}
a:visited{
    color: ${C.colors.link_text_visited};
}
`]
})
export class MyApp {
  rootPage:any = SearchPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public api: ApiService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


    this.api.loadData();
  }
}

