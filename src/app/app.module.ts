import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { SignUpComponent } from './SignUp/signup.component';
import { SigninComponent } from './SignIn/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from "./Cards/cards.component";
import { AddCardsComponent } from './AddCard/addcards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    SigninComponent,
    CardsComponent,
    AddCardsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
