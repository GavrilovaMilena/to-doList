import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  status = false;
  fill = true;
  openClosePopUp() {
    this.status = !this.status;
    this.fill = !this.fill;
  }
}
