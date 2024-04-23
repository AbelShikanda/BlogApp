import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainBlogContentComponent } from '../main-blog-content/main-blog-content.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeaderComponent, MainBlogContentComponent, SidebarComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent{

}
