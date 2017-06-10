import {Component, ViewEncapsulation} from '@angular/core';
import C from '../config'

@Component({
  selector: 'header-bar',
  templateUrl: 'header-bar.html',
  styles: [
    `header-bar ion-title .toolbar-title{
    color: ${C.colors.text_light};
  }
  
  .back-button, .back-button:hover, .back-button:active{
      color: ${C.colors.text_light} !important;
  }
  
  .toolbar-background{
    background: ${C.colors.page_theme}
  }
`],
  encapsulation: ViewEncapsulation.None
})
export class HeaderBar {
  readonly C = C.header;
  readonly COLOR_C = C.colors;


}
