import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { QuizTemplate } from './quiz-template.component'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [QuizTemplate],
  exports: [QuizTemplate]
})
export class QuizTemplateModule {}
