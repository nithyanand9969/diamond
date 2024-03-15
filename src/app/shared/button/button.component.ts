import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input('size')
  size = 'S';
  @Input('shade')
  shade = 'NA';
  @Input('animation')
  animation = 'F';
  @Input('name')
  name='';

  constructor() {}


}
