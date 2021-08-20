import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from "./photo";

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<Photo[]>(API + '/' + userName);
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams()
      .append('page', page.toString());

    console.log(API + '/' + userName + '?_page=' + page + '&_limit=3')
    return this.http
      .get<Photo[]>(API + '/' + userName + '?_page=' + page + '&_limit=3');
  }
}
