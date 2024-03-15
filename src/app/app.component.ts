import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isMenuScroller=false;
  isSideBar=false;

  @HostListener('window:scroll',['$event'])
  scrollCheck(){
    if(window.scrollY>80)
    this.isMenuScroller=true;
    else
    this.isMenuScroller=false;
    console.log(this.isMenuScroller)
  }

  opensidebar(){
    this.isSideBar=true;
  }
  closesidebar(){
    this.isSideBar=false;
  }
  scrollToTop(){
    document.body.scrollIntoView({
      behavior:'smooth'
    })
  }

}
