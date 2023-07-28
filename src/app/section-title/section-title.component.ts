import { Component, Input, OnInit } from '@angular/core';
import { OfcomRegion } from 'src/all-deals-types';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss'],
})
export class SectionTitleComponent  implements OnInit {
  @Input('border') border: boolean|'block' = true
  @Input('title') title: string = ''

  constructor() { }

  ngOnInit() {}

}
