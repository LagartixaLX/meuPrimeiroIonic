import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpagarPageRoutingModule } from './cpagar-routing.module';

import { CpagarPage } from './cpagar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpagarPageRoutingModule
  ],
  declarations: [CpagarPage]
})
export class CpagarPageModule {}
