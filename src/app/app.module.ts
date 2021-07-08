import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpsearchPipe } from './mypipe/empsearch.pipe';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MycolorDirective } from './directives/mycolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmpsearchPipe,
    Emp1Component,
    Emp2Component,
    MycolorDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
