import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManiComponent } from './mani/mani.component';
import { PediComponent } from './pedi/pedi.component';
import { ManipediComponent } from './manipedi/manipedi.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';

@NgModule({
  declarations: [
    AppComponent,
    ManiComponent,
    PediComponent,
    ManipediComponent,
    HomepageComponent,
    ContactoComponent,
    QuienessomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
