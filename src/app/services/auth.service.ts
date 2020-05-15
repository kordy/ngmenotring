import { Injectable } from '@angular/core';
import {IUser} from "../courses/UserTypes";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  public login(email: string, password: string) {
    try {
      localStorage.setItem('token', 'fakeToken');
      localStorage.setItem('userInfo', JSON.stringify({
        id: 'id1',
        name: 'Dmitrii',
        lastName: 'Korsakov',
      }));
    } catch(e) {
      return false;
    }
  }

  public logout(): boolean {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
      return true;
    } catch(e) {
      return false;
    }
  }

  public isAuthenticated(): boolean {
    return !!JSON.parse(localStorage.getItem('token'))
  }

  public getUser(): IUser {
    return JSON.parse(localStorage.getItem('userInfo'))
  }
}
