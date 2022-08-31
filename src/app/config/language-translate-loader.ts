import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const TRANSLATE_FILES = {
  AUTHENTICATION: 'authentication',
  DASHBOARD: 'dashboard',
  PROFILE: 'profile'
};

const i18nDir = './assets/i18n/';

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, public files: string[]) {}

  public getTranslation(lang: string): any {
    return forkJoin(
      this.files.map((file) => {
        return this.http.get(`${i18nDir}${lang}/${file}.json`);
      })
    ).pipe(
      map((response) => {
        return response.reduce((a, b) => {
          return Object.assign(a, b);
        });
      })
    );
  }
}

export function GetMultiTranslateHttpLoader(http: HttpClient): MultiTranslateHttpLoader {
  return new MultiTranslateHttpLoader(http, Object.values(TRANSLATE_FILES));
}
/**
 * App Translate Class to set the Translate loader
 */
export class AppTranslate {
  static Loader = () => ({
    loader: {
      provide: TranslateLoader,
      useFactory: GetMultiTranslateHttpLoader,
      deps: [HttpClient]
    }
  })
}
