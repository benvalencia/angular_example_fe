export interface ISocial {
  email: string;
}
export interface IRole {
  isAdmin: boolean;
  isManager: boolean;
  isProjectManager: boolean;
  isExpenseAdmin: boolean;
  isPurchaseAdmin: boolean;
}
export interface ITelephone {
  extension: string;
  number: string;
}
export interface IAddress {
  country: string;
  city: string;
  direction: string;
  zipCode: string;
}

export class UserEntity {
  uuid: string;
  name: string;
  lastname: string;
  username: string;
  email: string;
  company: string;
  password: string;
  language: string;
  city: string;
  address: IAddress;
  zipCode: string;
  twitter: string;
  facebook: ISocial;
  google: ISocial;
  createdAt: Date;
  role: IRole;
  type: number;
  profilePhoto: string;
  telephone: ITelephone;
  birthday: Date;

  constructor() {
    this.uuid = '';
    this.name = '';
    this.lastname = '';
    this.username = '';
    this.email = '';
    this.company = '';
    this.password = '';
    this.language = '';
    this.city = '';
    this.address = {
      country: '',
      city: '',
      direction: '',
      zipCode: ''
    },
    this.zipCode = '';
    this.twitter = '';
    this.facebook = {
      email: ''
    };
    this.google = {
      email: ''
    };
    this.createdAt = new Date();
    this.role = {
      isAdmin: false,
      isManager: false,
      isProjectManager: false,
      isExpenseAdmin: false,
      isPurchaseAdmin: false
    };
    this.type = 3;
    this.profilePhoto =  '';
    this.telephone = {
      extension: '',
      number: ''
    };
    this.birthday = new Date();
  }
}
