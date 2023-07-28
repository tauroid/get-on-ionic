import axios from 'axios'
import { Component, OnInit } from '@angular/core';
import { Benefit, Deal, OfcomRegion } from 'src/all-deals-types';
import { StorageService } from '../storage-service/storage-service.service';

type FilteredDeal =
  Deal&{penalty:number,maxPenalty:number,valid:boolean}

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
})
export class ResultsPage implements OnInit {

  regions: OfcomRegion[] = []
  benefits: Benefit[] = []
  budget: number = 0
  usage: number = 0

  deals: FilteredDeal[]|{error:string}|undefined = undefined

  dealsError() { return this.deals && 'error' in this.deals }

  validDeals: FilteredDeal[]|undefined = undefined
  invalidDeals: FilteredDeal[]|undefined = undefined

  constructor(private storage: StorageService) { }

  async ngOnInit() {
    const regionsString = await this.storage.get('regions')
    if (regionsString) {
      this.regions = JSON.parse(regionsString)
    }
    const benefitsString = await this.storage.get('benefits')
    if (benefitsString) {
      this.benefits = JSON.parse(benefitsString)
    }
    this.budget = Number(await this.storage.get('budget') ?? '0')
    this.usage = Number(await this.storage.get('usage') ?? '0')
    axios.post(
      'https://get-on.vercel.app/api/get-filtered-deals',
      {
        regions: this.regions,
        benefits: this.benefits,
        budget: this.budget,
        usage: this.usage
      }
    ).then(res => {
      this.deals = res.data.deals
      if (this.deals && !('error' in this.deals)) {
        this.validDeals = this.deals.filter(deal=>deal.valid)
        this.invalidDeals = this.deals.filter(deal=>!deal.valid)
      }
    })
  }

}
