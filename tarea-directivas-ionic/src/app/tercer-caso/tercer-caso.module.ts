import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TercerCasoPageRoutingModule } from './tercer-caso-routing.module';

import { TercerCasoPage } from './tercer-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TercerCasoPageRoutingModule
  ],
  declarations: [TercerCasoPage]
})
export class TercerCasoPageModule {}
