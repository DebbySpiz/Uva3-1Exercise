import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrescentePageRoutingModule } from './crescente-routing.module';

import { CrescentePage } from './crescente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrescentePageRoutingModule
  ],
  declarations: [CrescentePage]
})
export class CrescentePageModule {}
