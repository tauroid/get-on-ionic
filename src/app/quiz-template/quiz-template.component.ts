import { Component } from '@angular/core'

@Component({
  selector: 'app-quiz-template',
  template: `
    <main class="font-semibold flex text-sm min-h-screen flex-col items-center justify-center bg-white p-3">
      <a [routerLink]="['/']" class="m-2 w-8/12 max-w-[250px]">
        <img class="w-full" alt="GetOn logo" src={{GetOnLogo}}/>
      </a>
      <ng-content></ng-content>
    </main>
  `
})
export class QuizTemplate {
  GetOnLogo = '/assets/images/GetOn_logo_Bath.png'
}
