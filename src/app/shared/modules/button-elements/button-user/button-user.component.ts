import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UserEntity} from '../../../../core/entities/user.entity';

const PROFILE = {
  label: 'menu.profile',
  path: '/app/profile',
  icon: 'person',
  translate: true,
  enabled: true
};
const SETTINGS = {
  label: 'menu.settings',
  path: '/app/settings',
  icon: 'settings',
  translate: true,
  enabled: true
};
const LOGOUT = {
  label: 'menu.logout',
  path: '/app/logout',
  icon: 'power_settings_new',
  action: 'logout',
  translate: true,
  enabled: true
};

@Component({
  selector: 'app-button-user',
  templateUrl: './button-user.component.html',
  styleUrls: ['./button-user.component.scss']
})
export class ButtonUserComponent implements OnInit {

  @Input() userProfile: UserEntity = new UserEntity();
  @Output() logOutUser = new EventEmitter();

  @ViewChild('menu') menu!: ElementRef;

  public showOptions = false;
  allOptionsLinks: any[] = [];
  optionsLinks: any[] = [];
  constructor() {
    this.refreshLinks();
    this.userProfile.profilePhoto = 'assets/test/profile-test.jpeg';
    console.log('ButtonUserComponent: userProfileName -> ', this.userProfile.name);
    console.log('ButtonUserComponent: userProfileRole -> ', this.userProfile.role);
    console.log('ButtonUserComponent: userProfileOptions -> ', this.optionsLinks);
  }

  ngOnInit(): void {}

  logout(): void {
    this.logOutUser.emit();
  }

  clickUserProfileOptions(): void {
    this.showOptions = !this.showOptions;
  }

  // show only enabled links
  refreshLinks(): void {
    // const reportsWithPermissions = REPORTS;
    // reportsWithPermissions.enabled = myUser.isManager || myUser.isProjectManager;

    this.allOptionsLinks = [
      PROFILE, SETTINGS, LOGOUT
    ];

    this.optionsLinks = this.allOptionsLinks.filter((link) => link.enabled === true);
  }
}
