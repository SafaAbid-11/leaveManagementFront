import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaborateurRoutingModule } from './collaborateur-routing.module';
import { ConsulterPlanningComponent } from './consulter-planning/consulter-planning.component';

@NgModule({
  declarations: [
    ConsulterPlanningComponent,
  ],
  imports: [
    CommonModule,
    CollaborateurRoutingModule
  ]
})
export class CollaborateurModule { }
