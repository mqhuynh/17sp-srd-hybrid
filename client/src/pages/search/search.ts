import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListPage} from '../list/list'
import { AutoCompleteModule } from 'ionic2-auto-complete';
import { CompleteTestService } from '../../providers/complete-test-service';
import {ApiService} from '../../providers/api-service'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  selectData = [];
  selectedKey: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService, public api: ApiService) {
    const loader = () => {
      if(this.api.getData() === null){
        return setTimeout(loader, 200);
      }

      this.dataLoaded();
    };
    loader();
  }

  dataLoaded(){
    const data = this.api.getData();

    this.selectData = Object.keys(data.search_keys)
      .map(k => data.search_keys[k])
      .map(key => ({
        key,
        value: data.fieldname[key]
      }));

    if(this.selectData && this.selectData.length>0){
      this.selectedKey = this.selectData[0];
    }
  }

  gotoListPage(item: any){
    this.navCtrl.push(ListPage, item);

  }

  searchItemSelected(item){
    console.log('item selected', item);
    this.gotoListPage(item);
  }

  searchModeChanged(e){
    this.completeTestService.updateSearchMode(e.key);
  }


}
