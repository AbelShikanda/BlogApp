import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  constructor(public router:Router) {}
  onBlog() {this.router.navigate(['blog-page/blog'])}
  onProfile() {this.router.navigate(['blog-page/profile'])}
}
