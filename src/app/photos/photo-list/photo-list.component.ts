import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
})
export class PhotoListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;
  currentPage: number = 1;
  userId: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.userId;
    this.photos = this.activatedRoute.snapshot.data['photos'];
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userId, ++this.currentPage)
      .subscribe(
        (photos) => {
          this.filter = '';
          this.photos = this.photos.concat(photos);
          if (!photos.length) this.hasMore = false;
        });
  }
}
