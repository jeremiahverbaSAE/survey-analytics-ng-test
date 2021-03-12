import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyAnalyticsComponent } from './analytics.component';

const routes: Routes = [
  {
    path: '**',
    component: SurveyAnalyticsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
