import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { BudgetPage } from './budget.page'
import { QuizTemplateModule } from '../quiz-template/quiz-template.module'
import { IonicStorageModule } from '@ionic/storage-angular'
import { StorageService } from '../storage-service/storage-service.service'
import { BudgetBenefitsChooser } from './budget-benefits-chooser.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BudgetPage
      }
    ]),
    QuizTemplateModule,
  ],
  declarations: [BudgetPage, BudgetBenefitsChooser]
})
export class BudgetPageModule {}
