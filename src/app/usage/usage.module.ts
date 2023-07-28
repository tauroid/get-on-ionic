import { NgModule } from '@angular/core'

import { UsagePage } from './usage.page'
import { QuizTemplateModule } from '../quiz-template/quiz-template.module'
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { IonicStorageModule } from '@ionic/storage-angular'
import { StorageService } from '../storage-service/storage-service.service'
import { UsageCalculator } from './usage-calculator.component'
import { PeopleSelector } from './people-selector.component'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsagePage
      }
    ]),
    QuizTemplateModule,
  ],
  declarations: [UsagePage, UsageCalculator, PeopleSelector]
})
export class UsagePageModule {}
