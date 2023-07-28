import { Component, ElementRef, Input, ViewChild } from '@angular/core'
import axios from 'axios'
import { StorageService } from '../storage-service/storage-service.service'

@Component({
  selector: 'app-postcode-live',
  templateUrl: 'postcode-live.component.html'
})
export class PostcodeLive {
  constructor (private storage: StorageService) {}

  arrow = "/assets/images/arrow.png"
  @Input('submit') submitRef: HTMLInputElement|undefined
  @ViewChild('input') inputRef: ElementRef<HTMLInputElement>|undefined
  postcodeValidInternal: boolean|undefined
  postcodeError: string|undefined
  timeoutHandle: ReturnType<typeof setTimeout>|undefined
  errorDisplayTimeoutHandle: ReturnType<typeof setTimeout>|undefined
  regions: string[] = []
  setRegions (regions: string[]) {
    this.regions = regions
    this.storage.set('regions', JSON.stringify(regions))
  }

  postcodeValid () {
    return this.postcodeValidInternal &&
      (this.inputRef?.nativeElement.value.length ?? 0) > 0
  }

  async ngOnInit() {
    const postcode = await this.storage.get('postcode')
    if (postcode && this.inputRef) {
      this.inputRef.nativeElement.value = postcode
    }

    this.validatePostcode()
  }

  async validatePostcode() {
    const postcode = this.inputRef?.nativeElement.value ?? ''

    if (postcode.length === 0) {
      this.postcodeValidInternal = undefined
      this.postcodeError = ''
      return
    }

    const data = await axios.post(
      'https://get-on.vercel.app/api/validate-postcode',
      {postcode}
    ).then(res => res.data)

    if (postcode === this.inputRef?.nativeElement.value) {
      if (this.errorDisplayTimeoutHandle) {
        clearTimeout(this.errorDisplayTimeoutHandle)
        this.errorDisplayTimeoutHandle = undefined
      }

      if ('error' in data) {
        this.postcodeValidInternal = false
        this.errorDisplayTimeoutHandle =
          setTimeout(
            ()=>{
              if (postcode === this.inputRef?.nativeElement.value) {
                this.postcodeError = data.error
              }
            }, 2000)
        this.setRegions([])
      } else {
        this.postcodeValidInternal = true
        this.postcodeError = ''
        this.setRegions(data.regions)
      }
    }
  }

  onChange(e: Event) {
    this.storage.set(
      'postcode', (e.target as HTMLInputElement).value)
    this.postcodeValidInternal = undefined
    this.postcodeError = ''
    this.setRegions([])
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle)
      this.timeoutHandle = undefined
    }
    this.timeoutHandle = setTimeout(() => {
      this.validatePostcode()
    }, 300)
  }
}
