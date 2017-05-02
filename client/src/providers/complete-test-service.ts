import {AutoCompleteService} from 'ionic2-auto-complete';
import { Http } from '@angular/http';
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map'
import {ApiService} from './api-service'


/**
 * Used to create the "dropdown" options-list for ionic2-auto-complete module
 *
 * Used in conjunction with the ionic2-auto-complete module.
 * Basically, it filters the data from ApiService into user provided query.
 *
 */
@Injectable()
export class CompleteTestService implements AutoCompleteService {
  // overridden, useless string
  labelAttribute: string = "name";

  // the column of field in api data
  index = 0;

  constructor(protected api: ApiService) {

  }

  /**
   * Return matching items for the "dropdown" options
   *
   * @param keyword: whatever the user has entered
   * @returns Array<any>: the filtered list of options
   */
  getResults(keyword:string) {
    const data = this.api.getData();
    if(!data)return [];

    //complex function to filter+map the API data to make it understandable by the ionic2-auto-complete module.
    return Object.keys(data.data)
      .filter($id => data.data[$id][this.index].toLowerCase().indexOf(keyword.toLowerCase()) >= 0) //filter matching elements
      .map($id => ( //provide the output in an understandable format by the ionic2-auto-complete
        {$id, value: data.data[$id], name: data.data[$id][this.index]}
      ));
  }

  /**
   * Update the index to search by.
   *
   * This is triggered when the user switches the search mode in Search page
   * @param index The index of the search item in API data
   */
  updateSearchMode(index: number){
    //accept index of search element
    this.index = index;

  }
}
