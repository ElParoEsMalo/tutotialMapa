import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuarradasPage } from './guarradas.page';

const routes: Routes = [
  {
    path: '',
    component: GuarradasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuarradasPageRoutingModule {}
