import { Component, OnInit} from '@angular/core';
import {AuthGuardService} from '../../../core/services/auth-guard.service';
import {UserEntity} from '../../../core/entities/user.entity';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

  public userProfile: any;

  constructor(private authService: AuthGuardService) {
    this.userProfile = this.authService.authorized();

  }

  ngOnInit(): void {}

  logout(): void {
    this.authService.ejectUser();
  }
}
