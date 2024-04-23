import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-blog-content.component.html',
  styleUrl: './main-blog-content.component.scss'
})
// export class MainBlogContentComponent implements OnInit{
export class MainBlogContentComponent{

  // initializing array list
  blogList: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  // ngOnInit(): void {
  //   this.loadAllBlogs();
  // }
  // load all the blogs from the database
  // loadAllBlogs() {
  //   this.http.get("api/url/here").subscribe((res:any)=> {
  //     this.blogList = res.data;
  //   });
  // }

  onBlogSingle(id: number) {this.router.navigate(['blog-page/blog-single', id])}

  // just for demonstration purposes
  blogs = [
    {id: 1, name: 'blog 1', description: 'desctioption of blog 1'},
    {id: 2, name: 'blog 2', description: 'desctioption of blog 2'},
    {id: 3, name: 'blog 3', description: 'desctioption of blog 3'},
  ]

}
