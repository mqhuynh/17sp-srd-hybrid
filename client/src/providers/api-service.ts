import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import C from '../config'


/**
 * Provider used to communicate with the PHP web API
 *
 * loadData() is called (once) when the ionic application is loaded. to get the API data as-is, call getData().
 */
@Injectable()
export class ApiService {

  // the server address
  static readonly ADDRESS: string = C.server_url;

  //server data is stored in this variable
  static data: any = null;


  constructor(public http: Http) {
  }

  public loadData() {
    this.http.get(ApiService.ADDRESS)
      .map((response) => response.json()) //convert data to JSON
      .subscribe(data => {
        ApiService.data = data;
        console.log('data loaded from API');
      });
  }

  /**
   * Return data from API as-is
   * @returns {any}: the data
   */
  public getData(){
    return ApiService.data;
  }

}
