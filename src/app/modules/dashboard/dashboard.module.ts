import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {dashboardRoutes} from './dashboard.routing';
import {ContactWidgetsModule} from '../../shared/widgets/contact-widgets/contact-widgets.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    dashboardRoutes,
    ContactWidgetsModule
  ]
})
export class DashboardModule { }
