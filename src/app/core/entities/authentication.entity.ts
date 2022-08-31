export interface AuthenticationEntity {
  token: string;
}

export class LoginEntity {
  public username: string;
  public password: string;
  public remember: boolean;

  constructor() {
    this.username = '';
    this.password = '';
    this.remember = false;
  }
}
