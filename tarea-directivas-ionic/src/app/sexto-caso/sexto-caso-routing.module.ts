import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SextoCasoPage } from './sexto-caso.page';

const routes: Routes = [
  {
    path: '',
    component: SextoCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SextoCasoPageRoutingModule {}
