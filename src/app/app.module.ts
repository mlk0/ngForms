import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormValidatorsComponent } from './form-validators/form-validators.component';
import { BidirectionalBindingComponent } from './bidirectional-binding/bidirectional-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    FormBuilderComponent,
    FormValidatorsComponent,
    BidirectionalBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
