import {Injectable, isDevMode} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvService {

  public apiUrl = 'http://localhost:3000';

  constructor() {
    if (!isDevMode()) {
      this.apiUrl = 'https://api.analysebase.com';
    }
  }
}
