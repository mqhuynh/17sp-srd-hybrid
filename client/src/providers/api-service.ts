import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the ApiService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class ApiService {
  static readonly ADDRESS: string = "http://gdv.local/api.php";
  static data: any = null;

  constructor(public http: Http) {
  }

  public loadData() {
    this.http.get(ApiService.ADDRESS)
      .map((response) => response.json())
      .subscribe(data => {
        ApiService.data = data;
        console.log('data loaded from API');
      });
  }

  public getData(){
    return ApiService.data;
  }

}
