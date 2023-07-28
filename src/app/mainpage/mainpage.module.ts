import { IonicModule } from '@ionic/angular'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { MainPage } from './mainpage.page'
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPage,
      }
    ])
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
