import { Component } from '@angular/core'
import { StorageService } from '../storage-service/storage-service.service'
import { Router } from '@angular/router'

export const coefficients: Record<string,number> = {
    streaming: 4.5,
    social: 2,
    work: 5,
    gaming: 6
}

@Component({
  selector: 'app-usage-calculator',
  templateUrl: 'usage-calculator.component.html'
})
export class UsageCalculator {
  arrow = '/assets/images/arrow.png'

  constructor(private storage: StorageService,
              private router: Router) {}

  async ngOnInit() {
    this.usage = Number(await this.storage.get('usage') ?? '0')
    const peopleString = await this.storage.get('people')
    if (peopleString) {
      this.people = JSON.parse(peopleString) as {
        streaming:number,social:number,work:number,gaming:number}
      this.total = Math.max(
        ...Object.values(this.people))
    }
    this.total = Number(await this.storage.get('totalPeople') ?? '0')
  }

  calculateUsage() {
    const orderedCoeffs = Object.entries(coefficients)
    orderedCoeffs.sort(([_,a],[__,b]) => b-a)
    let usage = 0
    let remaining = this.total
    let activity = 0
    for (const [key,coeff] of orderedCoeffs) {
      const num = Math.min(remaining,this.people[key])
      usage += num * coeff
      remaining -= num
      if (remaining === 0 && activity === 0) {
        activity = 1
        remaining = this.total
        // minus num because num people are already doing this activity and can't do it twice
        const secondnum = Math.min(this.total, this.people[key]) - num
        usage += secondnum * coeff
        remaining -= secondnum
      }
    }
    this.usage = usage * 8 * 0.75
    this.storage.set('usage', String(this.usage))
  }

  usage = 0

  getUsageFixedPrecision() {
    return this.usage ? +parseFloat(String(this.usage)).toFixed(1) : 0
  }

  total = 0
  setTotal(n: number) {
    this.total = n
    this.calculateUsage()
    this.storage.set('totalPeople',String(this.total))
  }
  setTotalConstrained(n: number) {
    const max = Math.max(
      this.people.streaming, this.people.social,
      this.people.work, this.people.gaming)
    this.setTotal(Math.max(n,max))
  }
  setTotalConstrainedBound: (n:number) => void = _=>{}

  people: Record<string,number> &
  {streaming:number,social:number,work:number,gaming:number} =
    {streaming: 0, social: 0, work: 0, gaming: 0}

  setStreaming(n: number) { this.people.streaming = n }
  setSocial(n: number) { this.people.social = n }
  setWork(n: number) { this.people.work = n }
  setGaming(n: number) { this.people.gaming = n }

  setAndSyncTotal(f: (n: number) => void): (n: number) => void {
    return (n)=>{
      if (n > this.total) {
        this.setTotal(n)
      }
      f.call(this,n)
      this.storage.set('people', JSON.stringify(this.people))
      this.calculateUsage()
    }
  }

  onNextClick() {
    this.router.navigate(['/results'])
  }

}
