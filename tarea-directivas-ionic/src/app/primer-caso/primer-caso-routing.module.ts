import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrimerCasoPage } from './primer-caso.page';

const routes: Routes = [
  {
    path: '',
    component: PrimerCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrimerCasoPageRoutingModule {}
