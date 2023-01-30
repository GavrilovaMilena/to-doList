import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { ListComponent } from './List/list.component';
import { SignUpComponent } from './SignUp/signup.component';
import { PopUpComponent } from './PopUp/popup.component';
import { SignInComponent } from './SignIn/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    SignUpComponent,
    PopUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
