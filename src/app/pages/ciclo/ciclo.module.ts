import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CicloPageRoutingModule } from './ciclo-routing.module';

import { CicloPage } from './ciclo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CicloPageRoutingModule
  ],
  declarations: [CicloPage],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CicloPageModule {}
