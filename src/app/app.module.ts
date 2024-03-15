import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllcourceComponent } from './allcource/allcource.component';
import { PagesComponent } from './pages/pages.component';
import { BlogComponent } from './blog/blog.component';
import { ContatcComponent } from './contatc/contatc.component';
import { MenuComponent } from './shared/menu/menu.component';
import { AuthComponent } from './shared/auth/auth.component';
import { SocialComponent } from './social/social.component';
import { PhoneComponent } from './phone/phone.component';
import { EmailComponent } from './email/email.component';
import { ButtonComponent } from './shared/button/button.component';
import { RatingComponent } from './shared/rating/rating.component';
import { TestComponent } from './text/test/test.component';
import { CardComponent } from './shared/card/card.component';
import { CourceFooterComponent } from './shared/card/cource-footer/cource-footer.component';
import { BlogFooterComponent } from './shared/card/blog-footer/blog-footer.component';
import { HeroComponent } from './home/hero/hero.component';
import { CoursesComponent } from './home/courses/courses.component';
import { HttpClientModule} from '@angular/common/http';
import { BlogsComponent } from './home/blogs/blogs.component';
import { HeadingComponent } from './shared/heading/heading.component';
import { VideoPopComponent } from './shared/video-pop/video-pop.component';
import { HotItWorkComponent } from './home/hot-it-work/hot-it-work.component';
import { SliderComponent } from './shared/slider/slider.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllcourceComponent,
    PagesComponent,
    BlogComponent,
    ContatcComponent,
    MenuComponent,
    AuthComponent,
    SocialComponent,
    PhoneComponent,
    EmailComponent,
    ButtonComponent,
    RatingComponent,
    TestComponent,
    CardComponent,
    CourceFooterComponent,
    BlogFooterComponent,
    HeroComponent,
    CoursesComponent,
    BlogsComponent,
    HeadingComponent,
    VideoPopComponent,
    HotItWorkComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
