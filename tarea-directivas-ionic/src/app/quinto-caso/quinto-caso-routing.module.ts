import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuintoCasoPage } from './quinto-caso.page';

const routes: Routes = [
  {
    path: '',
    component: QuintoCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuintoCasoPageRoutingModule {}
