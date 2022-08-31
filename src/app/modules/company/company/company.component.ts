import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {UserEntity} from '../../../core/entities/user.entity';
import * as userActions from '../../../actions/user.actions';

const COMPANY_DETAILS = {
  label: 'company.companyDetails',
  text: 'company.companyDetailsText',
  icon: 'description',
  translate: true,
  enabled: true,
  active: true,
  index: 1,
};
const COMPANIES = {
  label: 'company.companies',
  text: 'company.companiesText',
  icon: 'link',
  translate: true,
  enabled: true,
  active: false,
  index: 5
};
const USERS = {
  label: 'company.users',
  text: 'company.usersText',
  icon: 'person',
  translate: true,
  enabled: true,
  active: false,
  index: 2
};
const PAYMENT = {
  label: 'company.payment',
  text: 'company.paymentText',
  icon: 'location_on',
  translate: true,
  enabled: true,
  active: false,
  index: 3
};


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  uuid = '';
  companyId = '';
  userType = '';
  userUsername = '';
  userEmail = '';
  userPhone = '';
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
      COMPANY_DETAILS, COMPANIES, USERS, PAYMENT
    ];
    this.profileStep = this.allProfileStep.filter((step) => step.enabled === true);
  }
}
