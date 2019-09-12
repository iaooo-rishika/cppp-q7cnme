import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';
import {MatFormFieldModule} from '@angular/material/form-field';

// import {StepperLabelPositionBottomExample} from './app/stepper-label-position-bottom-example';
import {WizardComponent} from './app/wizard/wizard.component';

import {TemplateEditorComponent} from './app/template-editor/template-editor.component';
import { RuntimeContentComponent } from './app/runtime-content/runtime-content.component';
import { BidBasicDetailsComponent } from './app/bid-basic-details/bid-basic-details.component';
import { BidScheduleComponent } from './app/bid-schedule/bid-schedule.component';
import { EmdEpbgDetailsComponent } from './app/emd-epbg-details/emd-epbg-details.component';
import { BidSchedulePhysicalComponent } from './app/bid-schedule-physical/bid-schedule-physical.component';
import { BidScheduleOnlineComponent } from './app/bid-schedule-online/bid-schedule-online.component';

import { StepComponent } from './app/step/step.component';
import { StepDirective } from './app/step.directive';
import { ApiService } from './app/api.service';



@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  entryComponents: [
    WizardComponent,
    BidBasicDetailsComponent,
    EmdEpbgDetailsComponent,
    BidSchedulePhysicalComponent,
    BidScheduleOnlineComponent,
    BidScheduleComponent,
  ],
  declarations: [
    WizardComponent,
    TemplateEditorComponent,
    RuntimeContentComponent,
    BidBasicDetailsComponent,
    EmdEpbgDetailsComponent,
    BidSchedulePhysicalComponent,
    BidScheduleOnlineComponent,
    BidScheduleComponent,
    StepComponent,
    StepDirective
  ],
  bootstrap: [WizardComponent, BidScheduleComponent],
  providers: [ ApiService ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */