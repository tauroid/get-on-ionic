import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { LocationPage } from './location.page'
import { QuizTemplateModule } from '../quiz-template/quiz-template.module'
import { PostcodeLive } from './postcode-live.component';
import { IonicStorageModule } from '@ionic/storage-angular'
import { StorageService } from '../storage-service/storage-service.service'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LocationPage,
      }
    ]),
    QuizTemplateModule,
  ],
  declarations: [LocationPage, PostcodeLive]
})
export class LocationPageModule {}
