import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './photo';

const API = 'https://localhost:44317';
let headers = new HttpHeaders().append('Content-Type', 'application/json');

let options = { headers };

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userId: string) {
    const params = new HttpParams().append('userId', userId);

    return this.http.get<Photo[]>(API + '/Photo/FindAllByUser', { params });
  }

  listFromUserPaginated(userId: string, pageNumber: number) {
    const params = new HttpParams().append('userId', userId);
    const pagingParameters = JSON.stringify({ pageNumber, pageSize: 3 });

    return this.http.post<Photo[]>(
      API + '/Photo/FindPagined',
      pagingParameters,
      {
        headers,
        params,
      }
    );
  }

  getById(userName: string, id: number) {
    return this.http.get<Photo>(API + '/' + userName + '/' + id);
  }
}
