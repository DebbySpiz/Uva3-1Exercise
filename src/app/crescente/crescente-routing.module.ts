import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrescentePage } from './crescente.page';

const routes: Routes = [
  {
    path: '',
    component: CrescentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrescentePageRoutingModule {}
