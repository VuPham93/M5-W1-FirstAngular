import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeComponent } from './font-size/font-size.component';
import {FormsModule} from '@angular/forms';
import { PetInfoComponent } from './pet-info/pet-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeComponent,
    PetInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
