import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuarradasPageRoutingModule } from './guarradas-routing.module';

import { GuarradasPage } from './guarradas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuarradasPageRoutingModule
  ],
  declarations: [GuarradasPage]
})
export class GuarradasPageModule {}
