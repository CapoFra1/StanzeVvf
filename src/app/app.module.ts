import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagine/home/home.component';
import { LoginComponent } from './pagine/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './pagine/page-not-found/page-not-found.component';
import { UtentiStanzeComponent } from './pagine/utenti-stanze/utenti-stanze.component';
import { ToolbarComponent } from './componenti/toolbar/toolbar.component';
import { MenuItemComponent } from './componenti/menu-item/menu-item.component';
import { UtentiComponent } from './pagine/utenti/utenti.component';
import { TimerComponent } from './componenti/timer/timer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    UtentiStanzeComponent,
    ToolbarComponent,
    MenuItemComponent,
    UtentiComponent,
    TimerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
