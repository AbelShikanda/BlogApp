import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { MainBlogContentComponent } from './main-blog-content/main-blog-content.component';
import { SingleBlogContentComponent } from './single-blog-content/single-blog-content.component';
import { BlogSingleComponent } from './blog-single/blog-single.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';

const routes: Routes = [
  {path: 'blog', component:BlogComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'navbar', component:NavbarComponent},
  {path: 'footer', component:FooterComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'breadcrumb', component:BreadcrumbComponent},
  {path: 'main-blog-content', component:MainBlogContentComponent},
  {path: 'single-blog-content', component:SingleBlogContentComponent},
  {path: 'blog-single', component:BlogSingleComponent},
  {path: 'sidebar', component:SidebarComponent},
  {path: 'profile-content', component:ProfileContentComponent},
  {path: 'profile-sidebar', component:ProfileSidebarComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogPageRoutingModule { }
