import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Material
import { 
  MatSelectModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SelectorComponent } from './components/selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
