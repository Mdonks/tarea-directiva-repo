import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartoCasoPage } from './cuarto-caso.page';

const routes: Routes = [
  {
    path: '',
    component: CuartoCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartoCasoPageRoutingModule {}
