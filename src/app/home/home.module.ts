import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmesage.module';
import { SiginComponent } from './signin/signin.component';

@NgModule({
  declarations: [SiginComponent],
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, RouterModule],
})
export class HomeModule {}
