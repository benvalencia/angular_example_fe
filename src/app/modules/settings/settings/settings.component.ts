import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {UserEntity} from '../../../core/entities/user.entity';
import * as userActions from '../../../actions/user.actions';

const NOTIFICATIONS = {
  label: 'settings.notifications',
  text: 'settings.notificationsText',
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

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  uuid = '';
  userUsername = '';
  userEmail = '';
  userPassword = '';
  userConfirmPassword = '';
  name = '';
  lastName = '';
  country = '';
  language = '';
  address = '';
  zipCode = '';
  city = '';
  twitter = '';

  allProfileStep: any[] = [];
  profileStep: any[] = [];

  constructor(private store: Store,
              private authService: AuthGuardService,
  ) {
    const me = this.authService.authorized();
    // me
    this.refreshSteps();
    this.setInitUserInfo(me);
  }

  ngOnInit(): void {}

  stepIsActive(): number {
    const step = this.allProfileStep.find((itemStep) => itemStep.active === true);
    return step.index;
  }
  setStepActive(step: any): void {
    // TODO: Change the step type into StepType
    this.profileStep.map((itemStep) => itemStep.active ? itemStep.active = false : null);
    step.active = true;
  }
  setInitUserInfo(me: UserEntity): void {
    this.uuid = me.uuid;
    this.userUsername = me.username;
    this.userEmail = me.email;
    this.userPassword = me.password;
    this.userConfirmPassword = '';
    this.name = me.name;
    this.language = me.language;
    this.zipCode = me.zipCode;
    this.city = me.city;
    this.twitter = me.twitter;
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
      id: this.uuid,
      data: {
        username: this.userUsername,
        name: this.name,
        lastName: this.lastName,
        email: this.userEmail,
        country: this.country,
        city: this.city,
        twitter: this.twitter,
      }
    }));
  }
  refreshSteps(): void {
    // TODO: Check if users has rights to watch some sections
    // me: UserEntity
    this.allProfileStep = [
      NOTIFICATIONS, PERSONAL_INFO, LOCATION, SOCIAL_LINK
    ];
    this.profileStep = this.allProfileStep.filter((step) => step.enabled === true);
  }
}
