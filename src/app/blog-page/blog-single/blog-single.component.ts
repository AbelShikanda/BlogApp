import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-blog-single',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, HeaderComponent, BlogSingleComponent, SidebarComponent],
  templateUrl: './blog-single.component.html',
  styleUrl: './blog-single.component.scss'
})
export class BlogSingleComponent {

}
