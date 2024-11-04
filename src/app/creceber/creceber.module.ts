import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreceberPageRoutingModule } from './creceber-routing.module';

import { CreceberPage } from './creceber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreceberPageRoutingModule
  ],
  declarations: [CreceberPage]
})
export class CreceberPageModule {}
