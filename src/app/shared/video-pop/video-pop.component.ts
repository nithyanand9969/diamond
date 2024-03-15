import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-pop',
  templateUrl: './video-pop.component.html',
  styleUrls: ['./video-pop.component.css'],
})
export class VideoPopComponent implements OnInit,OnChanges {
  @Input('url')
  url:string|undefined = undefined;
  @Input('show')
  show = true;

  @Output('close')
  onClose = new EventEmitter();
  safeUrl!:SafeResourceUrl;
  constructor(private santizier:DomSanitizer){

  }

  disableBodyScroling(){
    document.body.style.setProperty('overflow','hidden');
  }
  enbleBodyScroling(){
    document.body.style.setProperty('overflow','scroll');
  }

 
  ngOnInit(): void {
  this.init
  }
  ngOnChanges(): void {
    this.init()
  }
  init(){
    if(this.show)
    this.disableBodyScroling()
    this.safeUrl =  this.santizier.bypassSecurityTrustResourceUrl(this.url as string)
  }
  close(){
    this.enbleBodyScroling()
    this.onClose.emit()
  }
}
