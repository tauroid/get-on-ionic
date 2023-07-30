import { Component, Input } from '@angular/core';
import { FilteredDeal, OfcomRegion } from 'src/all-deals-types';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
})
export class ResultsItemComponent {
  tick = '/assets/images/tick_blue.png'
  GoToWebsite = '/assets/images/go_to_website.png'

  @Input({required: true}) item!: FilteredDeal
  @Input('first') first: boolean = false
  @Input({required: true}) regions!: OfcomRegion[]
  @Input('budget') budget: number = 0
  @Input('usage') usage: number = 0

}
