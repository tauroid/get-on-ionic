import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { QuizTemplateModule } from '../quiz-template/quiz-template.module';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { StorageService } from '../storage-service/storage-service.service';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
    QuizTemplateModule,
  ],
  declarations: [ResultsPage, SectionTitleComponent]
})
export class ResultsPageModule {}
