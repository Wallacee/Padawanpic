import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import JWT from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject = new BehaviorSubject<User>({} as User);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeNotify();
  }
  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeNotify();
  }
  getUser() {
    return this.userSubject.asObservable();
  }
  private decodeNotify() {
    const token = this.tokenService.getToken();
    const user = JWT(token ?? '') as User;
    this.userSubject.next(user);
  }
  logout() {
    this.tokenService.removeToken();
    this.userSubject.next({} as User);
  }
}
