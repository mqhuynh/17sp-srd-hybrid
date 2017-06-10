import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiService} from '../../providers/api-service'
import { AudioProvider } from 'ionic-audio';

/**
 * The listPage. Shows the description of an element like its name, email, contact, video, etc.
 */
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  data:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiService,
              private _audioProvider: AudioProvider) {
    const $id = this.navParams.get('$id');

    // Load data properly into [{key:<>, value:<>}] Array
    const data = this.api.getData();
    if(data && data.data[$id]){
      this.data = {
        $id,
        fields: data.data[$id].slice(1, data.data[$id].length).map((value, index)=> ({
          value,
          index,
          fieldname: data.fieldname[index+1],
          type: data.types[index+1]
        }))
      };

    }

  }

  // Open google maps
  showDirections(value){
    const url=`https://maps.google.com/?q=${value}`;

    console.log('launching', url);
    window.open(url, '_system');
  }

  // Open YouTube app
  openYoutube(value){
    console.log('launching ', value);
    window.open(value, '_system');
  }

  // Stop audio on page close if it's already playing
  ngOnDestroy(){
    this._audioProvider.stop();
  }

}
