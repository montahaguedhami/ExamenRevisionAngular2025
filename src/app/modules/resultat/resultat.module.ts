import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultatRoutingModule } from './resultat-routing.module';
import { ResultatComponent } from './resultat/resultat.component';


@NgModule({
  declarations: [
    ResultatComponent
  ],
  imports: [
    CommonModule,
    ResultatRoutingModule
  ]
})
export class ResultatModule { }
