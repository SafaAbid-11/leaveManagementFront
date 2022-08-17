import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsulterPlanningRoutingModule } from './consulter-planning-routing.module';
import { ConsulterPlanningComponent } from './consulter-planning.component';


@NgModule({
  declarations: [ConsulterPlanningComponent],
  imports: [
    CommonModule,
    ConsulterPlanningRoutingModule
  ]
})
export class ConsulterPlanningModule { }
