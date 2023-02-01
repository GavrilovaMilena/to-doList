import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'popup-component',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PopUpComponent {

  visibility = false;
  visibilityUp = false;
  openPopUpIn() {
    this.visibility = !this.visibility;

  }

  openPopUpUp() {
    this.visibilityUp = !this.visibilityUp;

  }
}
