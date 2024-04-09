import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'blog-page', loadChildren: () => import('./blog-page/blog-page.module').then(m => m.BlogPageModule) }
];
