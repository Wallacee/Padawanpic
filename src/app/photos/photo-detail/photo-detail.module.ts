import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailComponent } from './photo-detail.component';
import { PhotosModule } from '../photos.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PhotoModule } from '../photo/photo.module';



@NgModule({
  declarations: [PhotoDetailComponent],
  imports: [
    CommonModule,
    PhotoModule,
    CardModule
  ]
})
export class PhotoDetailModule { }
