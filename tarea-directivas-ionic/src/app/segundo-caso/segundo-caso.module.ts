import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundoCasoPageRoutingModule } from './segundo-caso-routing.module';

import { SegundoCasoPage } from './segundo-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundoCasoPageRoutingModule
  ],
  declarations: [SegundoCasoPage]
})
export class SegundoCasoPageModule {}
