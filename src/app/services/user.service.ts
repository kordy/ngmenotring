import { Injectable } from '@angular/core';
import {IUser} from "../courses/UserTypes";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): IUser {
    return {
      id: 'id1',
      name: 'Dmitrii',
      lastName: 'Korsakov',
    }
  }
}
