import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../UserTypes";
import {AuthService} from "../../../../services/auth.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.less']
})

export class UserInfoComponent implements OnInit, IUserInfoComponent {

  public user: IUser

  constructor(private userService: AuthService) { }

  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

}

interface IUserInfoComponent {
  user: IUser
}
