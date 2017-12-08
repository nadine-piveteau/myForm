import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

 
import { AppComponent }  from './app.component';
import { JobFormComponent } from './job-form.component';
 
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    JobFormComponent
  ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
