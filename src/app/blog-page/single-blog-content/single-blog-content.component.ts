import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-blog-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-blog-content.component.html',
  styleUrl: './single-blog-content.component.scss'
})
export class SingleBlogContentComponent {

  // now in order to read the data from the querry parameter
  // we fist intitialize the blog id
  blogId: number = 0;

  // create a variable for the details as well
  blogDetails: any;

  // then one more variable for the user details
  userDetials: any;

  //then read the data
  constructor(private activeRoute: ActivatedRoute, private http: HttpClient) {
    this.activeRoute.params.subscribe((res: any) => {
      this.blogId = res.id;
    })
  }

  // then we can use the blog id to open the blog from the database
  openBlog(id: number) {
    this.http.get("your/api/url" + id).subscribe((res: any)=> {
      this.blogDetails = res.data;
    })
  }

  //then we can get the user details from the database
  getUserDetails() {
    this.http.get("your/api/url" + this.blogDetails.user_id).subscribe((res: any)=> {
      // then store user details in user details variable
      this.userDetials = res.data;
    })
  }
}