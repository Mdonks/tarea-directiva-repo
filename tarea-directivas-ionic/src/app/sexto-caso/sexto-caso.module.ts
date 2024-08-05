import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SextoCasoPageRoutingModule } from './sexto-caso-routing.module';

import { SextoCasoPage } from './sexto-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SextoCasoPageRoutingModule
  ],
  declarations: [SextoCasoPage]
})
export class SextoCasoPageModule {}
