import {Component, ViewEncapsulation} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ListPage} from '../list/list'
import {AutoCompleteModule} from 'ionic2-auto-complete';
import {CompleteTestService} from '../../providers/complete-test-service';
import {ApiService} from '../../providers/api-service'
import {LoadingController} from 'ionic-angular';
import C from '../../config'

/**
 * The page where the user can search for elements.
 *
 * This page is also the landing page. It will later on pass data to listPage to show a single element.
 */
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
page-search ion-footer .toolbar-background {
    background: ${C.colors.page_theme};
}
page-search ion-footer .toolbar-title {
    color: ${C.colors.text_light};
}

page-search ion-auto-complete {
    color: ${C.colors.page_theme};
}
`]
})
export class SearchPage {
  readonly FOOTER_C = C.footer;
  readonly SEARCH_C = C.search_page;
  readonly COLOR_C = C.colors;

  selectData = [];
  selectedKey: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public completeTestService: CompleteTestService, public api: ApiService, public loading: LoadingController) {
    //the loading box
    const loaderBox = this.loading.create({
      content: 'Getting latest entries...',
    });

    // this is a loader which will wait until data is loaded from the API.
    // this will wait and once it completes, this.dataLoaded() is called.
    const loader = () => {
      if (this.api.getData() === null) {
        return setTimeout(loader, 200);
      }

      this.dataLoaded();
      loaderBox.dismiss();

      //testing purpose only
      setTimeout(() => {
        // this.searchItemSelected(this.completeTestService.getResults('a')[0]);
      }, 100);
    };

    //show the loading box
    loaderBox.present();


    loader();
  }

  /**
   * Called when the API is loaded.
   */
  dataLoaded() {
    const data = this.api.getData();

    //create a select data for the dropdown to select "search by" field.
    this.selectData = Object.keys(data.search_keys)
      .map(k => data.search_keys[k])
      .map(key => ({
        key,
        value: data.fieldname[key]
      }));


    //set a default "search by" element
    if (this.selectData && this.selectData.length > 0) {
      this.selectedKey = this.selectData[0];
      this.searchModeChanged(this.selectedKey);
    }
  }

  /**
   * Take to list page.
   * @param the element that the user selected
   */
  gotoListPage(item: any) {
    this.navCtrl.push(ListPage, item);

  }

  searchItemSelected(item) {
    this.gotoListPage(item);
  }

  /**
   * User changed the "search by" field
   * @param e the field
   */
  searchModeChanged(e) {
    this.completeTestService.updateSearchMode(e.key);
  }


}
