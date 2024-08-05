import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegundoCasoPage } from './segundo-caso.page';

const routes: Routes = [
  {
    path: '',
    component: SegundoCasoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegundoCasoPageRoutingModule {}
