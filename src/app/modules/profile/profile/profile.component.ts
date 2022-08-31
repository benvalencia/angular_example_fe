import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {UserEntity} from '../../../core/entities/user.entity';
import * as userActions from '../../../actions/user.actions';
import {GlobalyApiService} from "../../../services/api/globaly/globaly-api.service";

const ACCOUNT_DETAILS = {
  label: 'profile.accountDetails',
  text: 'profile.accountDetailsText',
  icon: 'description',
  translate: true,
  enabled: true,
  active: true,
  index: 1,
};
const PERSONAL_INFO = {
  label: 'profile.personalInfo',
  text: 'profile.personalInfoText',
  icon: 'person',
  translate: true,
  enabled: true,
  active: false,
  index: 2
};
const LOCATION = {
  label: 'profile.address',
  text: 'profile.addressText',
  icon: 'location_on',
  translate: true,
  enabled: true,
  active: false,
  index: 3
};
const SOCIAL_LINK = {
  label: 'profile.socialLinks',
  text: 'profile.socialLinksText',
  icon: 'link',
  translate: true,
  enabled: true,
  active: false,
  index: 4
};
const CHANGE_PASSWORD = {
  label: 'profile.changePassword',
  text: 'profile.changePasswordText',
  icon: 'link',
  translate: true,
  enabled: true,
  active: false,
  index: 5
};

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public userEntity: UserEntity = new UserEntity();

  allProfileStep: any[] = [];
  profileStep: any[] = [];

  constructor(
    private store: Store,
    private authService: AuthGuardService,
    private globaly: GlobalyApiService
  ) {
    this.store.dispatch(new userActions.GetUserByToken(
      { token: this.authService.authToken()}
    ));

    const me = this.authService.authorized();
    this.refreshSteps();
    this.setInitUserInfo(me);
  }

  ngOnInit(): void {}

  setInitUserInfo(me: UserEntity): void {
    // User Detail
    this.userEntity.uuid = me.uuid;
    this.userEntity.company = me.company;
    this.userEntity.username = me.username;
    this.userEntity.email = me.email;
    this.userEntity.telephone.extension = me.telephone.extension;
    this.userEntity.telephone.number = me.telephone.number;
    // Personal Information
    this.userEntity.name = me.name;
    this.userEntity.lastname = me.lastname;
    this.userEntity.language = me.language;
    this.userEntity.birthday = me.birthday;
    // Address Information
    this.userEntity.address.country = me.address.country;
    this.userEntity.address.city = me.address.city;
    this.userEntity.address.direction = me.address.direction;
    this.userEntity.address.zipCode = me.address.zipCode;
    // Social Links
    this.userEntity.twitter = me.twitter;
    this.userEntity.facebook.email = me.facebook.email;
    this.userEntity.google.email = me.google.email;
  }

  getCountries(): any {
    let countryReturn;
    this.globaly.getCountriesList().subscribe((countries) => {
      console.log(countries);
      countryReturn = countries;
    });
    return countryReturn;
  }

  stepIsActive(): number {
    return this.allProfileStep.find((itemStep) => itemStep.active === true).index;
  }
  setStepActive(step: any): void {
    this.profileStep.map((itemStep) => itemStep.active ? itemStep.active = false : null);
    step.active = true;
  }
  previousProfileSection(): void {
    const step = this.allProfileStep.find((itemStep) => itemStep.index === this.stepIsActive() - 1);
    this.setStepActive(step);
  }
  nextProfileSection(): void {
    const step = this.allProfileStep.find((itemStep) => itemStep.index === this.stepIsActive() + 1);
    this.setStepActive(step);
  }

  saveProfileSettings(): void {
    this.store.dispatch(new userActions.UpdateUser({
      id: this.userEntity.uuid,
      data: {
        // User Detail
        username: this.userEntity.username,
        email: this.userEntity.email,
        telephone: {
          extension: this.userEntity.telephone.extension,
          number: this.userEntity.telephone.number
        },
        // Personal Information
        name: this.userEntity.name,
        lastname: this.userEntity.lastname,
        language: this.userEntity.language,
        birthday: this.userEntity.birthday.toString(),
        // Address Information
        address: {
          country: this.userEntity.address.country,
          city: this.userEntity.address.city,
          direction: this.userEntity.address.direction,
          zipCode: this.userEntity.address.zipCode,
        },
        // Social Links
        twitter: this.userEntity.twitter,
        facebook: {
          email: this.userEntity.facebook.email,
        },
        google: {
          email: this.userEntity.google.email
        }
      }
    }));
  }
  refreshSteps(): void {
    this.allProfileStep = [ ACCOUNT_DETAILS, PERSONAL_INFO, LOCATION, SOCIAL_LINK, CHANGE_PASSWORD ];
    this.profileStep = this.allProfileStep.filter((step) => step.enabled === true);
  }
}
