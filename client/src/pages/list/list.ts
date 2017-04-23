import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiService} from '../../providers/api-service'

/**
 * Generated class for the List page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  data:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiService) {
    const $id = this.navParams.get('$id');

    const data = this.api.getData();
    if(data && data.data[$id]){
      this.data = {
        $id,
        fields: data.data[$id].map((value, index)=> ({
          value,
          index,
          fieldname: data.fieldname[index],
          type: data.types[index]
        }))
      };
      console.log('new data is ', this.data);

    }

  }
}
