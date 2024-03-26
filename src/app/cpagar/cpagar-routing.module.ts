import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpagarPage } from './cpagar.page';

const routes: Routes = [
  {
    path: '',
    component: CpagarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpagarPageRoutingModule {}
