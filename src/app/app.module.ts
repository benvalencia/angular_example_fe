import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {appRoutes} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthenticationModule} from './modules/authentication/authentication.module';
import { AppCustomPreloader } from './app-routing-preload';
import { TranslateModule, TranslateService} from '@ngx-translate/core';
import { AppTranslate } from './config/language-translate-loader';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppConfig} from './config/appConfig';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {ApiClient, apiClientCreator} from './core/utils/api-client';
import { EnvService } from './core/services/env.service';
import {effects} from './effects/effects.routing';
import {ApiClientInterceptor} from './core/utils/api-client-interceptor';
import {LayoutModule} from './modules/layout/layout.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {
  FacebookLoginProvider,
  GoogleLoginProvider, MicrosoftLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule
} from 'angularx-social-login';
import {PrimeNGConfig} from 'primeng/api';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRoutes,
    TranslateModule,
    TranslateModule.forRoot(AppTranslate.Loader()),
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // }),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot(effects),
    // Modules
    LayoutModule,
    AuthenticationModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    SocialLoginModule,
  ],
  exports: [
    TranslateModule,
  ],
  providers: [
    AppCustomPreloader,
    { provide: HTTP_INTERCEPTORS, useClass: ApiClientInterceptor, multi: true },
    {
      provide: ApiClient,
      useFactory: apiClientCreator,
      deps: [HttpClient, EnvService]
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(environment.apiKey.google),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(environment.apiKey.facebook),
          },
          // {
          //   id: MicrosoftLoginProvider.PROVIDER_ID,
          //   provider: new MicrosoftLoginProvider('639964903775514'),
          // },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private translate: TranslateService,
    private primengConfig: PrimeNGConfig
  ) {
    // TODO: Set the software's default language as system's (pc) default language
    this.translate.setDefaultLang(AppConfig.DEFAULT_LANG);

    this.primengConfig.ripple = true;
  }
}
