import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  // visibility = false;
  fill = true;
  openClosePopUp() {
    // this.visibility = !this.visibility;
    this.fill = !this.fill;
  }
}
