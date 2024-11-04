import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreceberPage } from './creceber.page';

const routes: Routes = [
  {
    path: '',
    component: CreceberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreceberPageRoutingModule {}
