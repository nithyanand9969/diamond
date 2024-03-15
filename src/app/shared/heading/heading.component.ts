import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {
  @Input('subHeading')
  subHeading = '';
  @Input('headingText1')
  headingText1 = '';
  @Input('headingText2')
  headingText2 = '';
  @Input('headingText3')
  headingText3 = '';
  @Input('speicalHeadingID')
  speicalHeadingID:number|String = 2;
  @Input('align')
  align='C';
}
