import axios from 'axios'
import { Component } from '@angular/core'
import { Benefit } from 'src/all-deals-types'
import { Router } from '@angular/router'
import { StorageService } from '../storage-service/storage-service.service'

@Component({
  selector: 'app-budget-benefits-chooser',
  templateUrl: 'budget-benefits-chooser.component.html'
})
export class BudgetBenefitsChooser {
  budgets = [0, 12, 15, 20]
  budgetId = 0
  setBudgetId(id: number) {
    this.budgetId = id
    this.storage.set('budget', String(this.budgets[this.budgetId]))
  }
  constructor(private router: Router,
              private storage: StorageService) {}
  async ngOnInit() {
    this.benefits = await axios.get('https://get-on.vercel.app/api/get-benefits').then(res=>res.data)
    const budget = await this.storage.get('budget')
    if (budget !== null) {
      this.budgetId = this.budgets.indexOf(Number(budget))
    }
    const benefitsString = await this.storage.get('benefits')
    if (benefitsString !== null) {
      const benefits = JSON.parse(benefitsString) as Benefit[]
      this.selectedBenefits = this.benefits.map(
        benefit => benefits.includes(benefit))
    } else {
      this.selectedBenefits = Array(this.benefits.length).fill(false)
    }
  }
  benefits: Benefit[] = []
  selectedBenefits: boolean[]|undefined
  tick = '/assets/images/tick_blue.png'
  arrow = '/assets/images/arrow.png'
  onBoxClick(i: number) {
    if (this.selectedBenefits !== undefined) {
      this.selectedBenefits[i] = !this.selectedBenefits[i]
      this.storage.set(
        'benefits',
        JSON.stringify(this.benefits.filter(
          (_,i)=>this.selectedBenefits?.[i])))
    }
  }
  onNextClick() {
    this.router.navigate(['/usage'])
  }
}
