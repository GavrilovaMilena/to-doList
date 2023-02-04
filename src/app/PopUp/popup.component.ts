import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'popup-component',
  templateUrl: 'popup.component.html',
  styleUrls: ['popup.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PopUpComponent {

  visibilityIn = false;
  visibilityUp = false;
  openPopUpIn() {
    this.visibilityIn = !this.visibilityIn;

  }

  openPopUpUp() {
    this.visibilityUp = !this.visibilityUp;

  }
}
