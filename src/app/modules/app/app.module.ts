import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app/app.component';
import {LayoutModule} from '../layout/layout.module';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routing';
import {AuthGuardService} from '../../core/services/auth-guard.service';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule,
    TranslateModule,
    appRoutes
  ],
  providers: [
    AuthGuardService
  ]
})
export class AppModule { }
