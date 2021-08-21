import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoDetailResolver implements Resolve<Observable<Photo>> {
  constructor(private photoService: PhotoService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo> {
    const userName = route.params.userName;
    const id = route.params.id;
    return this.photoService.getById(userName, id)

  }
}
