import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mainpage/mainpage.module').then(m => m.MainPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then(m => m.LocationPageModule)
  },
  {
    path: 'budget',
    loadChildren: () => import('./budget/budget.module').then(m=>m.BudgetPageModule)
  },
  {
    path: 'usage',
    loadChildren: () => import('./usage/usage.module').then(m=>m.UsagePageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
