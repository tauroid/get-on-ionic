import { Component, ViewChild } from '@angular/core'
import { PostcodeLive } from './postcode-live.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-location',
  templateUrl: 'location.page.html'
})
export class LocationPage {
  constructor(private router: Router) {}
  Step1of3 = '/assets/images/step_1of3.png'
  @ViewChild('postcodeLive') postcodeRef: PostcodeLive|undefined
  @ViewChild('submit') submitRef: HTMLInputElement|undefined
  onSubmit(e: SubmitEvent) {
    e.preventDefault()
    if (this.postcodeRef?.postcodeValid()) {
      this.router.navigate(['/budget'])
    }
  }
}
