import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list'
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/complete-test-service';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Search');
  }

  gotoListPage(item: any){
    console.log('navigating to list page');
    this.navCtrl.push(ListPage);

  }

  searchItemSelected(item){
    console.log('item selected', item);
    this.gotoListPage(item);
  }


}
