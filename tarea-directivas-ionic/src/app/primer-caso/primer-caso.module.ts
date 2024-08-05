import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrimerCasoPageRoutingModule } from './primer-caso-routing.module';

import { PrimerCasoPage } from './primer-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimerCasoPageRoutingModule
  ],
  declarations: [PrimerCasoPage]
})
export class PrimerCasoPageModule {}
