import axios from 'axios'
import { Component } from '@angular/core'

import { Benefit } from 'src/all-deals-types'

@Component({
  selector: 'app-mainpage',
  templateUrl: 'mainpage.page.html'
})
export class MainPage {
  async ngOnInit() {
    this.benefits = await axios.get('https://get-on.vercel.app/api/get-benefits').then(res=>res.data)
  }
  benefits: Benefit[] = []
  GetStarted = '/assets/images/get_started.png'
  GetOnLogo = '/assets/images/GetOn_logo_Bath.png'
  Tech4Good = '/assets/images/techforgood-SW-white.png'
  info = '/assets/images/info.png'
  roadmapItems = [
    `<img class="inline h-6 w-6" alt="info" src="${this.info}"/> tooltips`,
    'Distinguish general and income-based JSA/ESA, and support the different types of Social Services referral',
    'Information about zero-cost connections',
    'Postcode-specific connection speed advice',
    'Integrate with provider postcode search'
  ]
}
