import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { PendingPageComponent } from './components/pending-page/pending-page.component';
import { TranscriptAnalyzerComponent } from './components/transcript-analyzer/transcript-analyzer.component';
import { ManagerToolbarComponent } from './components/manager-toolbar/manager-toolbar.component';
import {MaterialModule} from './material/material.module';
import { CallSelectionFormComponent } from './components/call-selection-form/call-selection-form.component';
import { SensitivitySliderComponent } from './components/sensitivity-slider/sensitivity-slider.component';
import { ScriptTableComponent } from './components/script-table/script-table.component';
import { TranscriptTableComponent } from './components/transcript-table/transcript-table.component';
import { TimerPipe } from './pipes/timer.pipe';
import { PieFillingDirective } from './directives/pie-filling.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    PendingPageComponent,
    TranscriptAnalyzerComponent,
    ManagerToolbarComponent,
    CallSelectionFormComponent,
    SensitivitySliderComponent,
    ScriptTableComponent,
    TranscriptTableComponent,
    TimerPipe,
    PieFillingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
