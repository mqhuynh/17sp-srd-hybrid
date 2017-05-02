import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiService} from '../../providers/api-service'
import { AudioProvider } from 'ionic-audio';

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
  myTracks: any[];
  allTracks: any[];
  selectedTrack = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiService,
              private _audioProvider: AudioProvider) {
    const $id = this.navParams.get('$id');

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

    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }];

  }

  showDirections(value){
    const url=`https://maps.google.com/?q=${value}`;

    console.log('launching', url);
    window.open(url, '_system');
  }

  openYoutube(value){
    console.log('launching ', value);
    window.open(value, '_system');
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }
  ngOnDestroy(){
    this._audioProvider.stop();

  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }
}
