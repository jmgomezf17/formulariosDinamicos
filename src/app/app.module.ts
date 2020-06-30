import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ElementComponent } from './components/element/element.component';
import { ElementFormComponent } from './components/element-form/element-form.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    ElementFormComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
