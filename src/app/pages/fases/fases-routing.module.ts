import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FasesPage } from './fases.page';

const routes: Routes = [
  {
    path: '',
    component: FasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FasesPageRoutingModule {}
