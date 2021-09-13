import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';

const API = 'https://localhost:44317';
const endpoint = API + '/user/login';
let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  authenticate(email: string, password: string) {
    console.log(endpoint);
    const UserAuthenticateRequestViewModel = JSON.stringify({
      email,
      password,
    });
    console.log(UserAuthenticateRequestViewModel);
    return this.http
      .post(endpoint, UserAuthenticateRequestViewModel, {
        headers,
      })
      .pipe(
        tap<any>((resp) => {
          this.userService.setToken(resp.token);
        })
      );
  }
}
