import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuintoCasoPageRoutingModule } from './quinto-caso-routing.module';

import { QuintoCasoPage } from './quinto-caso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuintoCasoPageRoutingModule
  ],
  declarations: [QuintoCasoPage]
})
export class QuintoCasoPageModule {}
