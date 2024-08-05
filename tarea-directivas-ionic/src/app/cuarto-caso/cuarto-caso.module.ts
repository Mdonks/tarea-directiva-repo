import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartoCasoPageRoutingModule } from './cuarto-caso-routing.module';

import { CuartoCasoPage } from './cuarto-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartoCasoPageRoutingModule
  ],
  declarations: [CuartoCasoPage]
})
export class CuartoCasoPageModule {}
