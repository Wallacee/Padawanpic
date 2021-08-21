import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {

  userName: string = '';
  id: number = 0;
  photo: Photo = Object();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.photo = this.activatedRoute.snapshot.data.photo;
  }

}
