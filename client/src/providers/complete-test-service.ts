import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
import {ApiService} from './api-service'

@Injectable()
export class CompleteTestService implements AutoCompleteService {
  labelAttribute = "name";
  index = 0;

  constructor(protected api: ApiService) {

  }
  getResults(keyword:string) {
    const data = this.api.getData();
    if(!data)return [];

    const ret = Object.keys(data.data)
      .filter($id => data.data[$id][this.index].toLowerCase().indexOf(keyword.toLowerCase())>=0)
      .map($id => ({$id, value: data.data[$id], name: data.data[$id][this.index]}));

    return ret;
  }

  updateSearchMode(mode: number){
    //accept index of search element
    this.index = mode;

  }
}
