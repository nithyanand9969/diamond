import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatcComponent } from './contatc/contatc.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { AllcourceComponent } from './allcource/allcource.component';
import { TestComponent } from './text/test/test.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'allcources', component: AllcourceComponent },
  { path: 'contact', component: ContatcComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'pages', component: PagesComponent },
  { path: 'test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
