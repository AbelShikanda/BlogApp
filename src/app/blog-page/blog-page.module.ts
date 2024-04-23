import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    HttpClientModule
  ]
})
export class BlogPageModule { }
