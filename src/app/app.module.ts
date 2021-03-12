import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlotlyModule } from 'angular-plotly.js';
import { SurveyAnalyticsComponent } from './analytics.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, SurveyAnalyticsComponent],
  imports: [BrowserModule, AppRoutingModule, PlotlyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
