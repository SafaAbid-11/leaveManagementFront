import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsulterPlanningComponent } from './consulter-planning.component';

const routes: Routes = [
  {
    path: '',
    component: ConsulterPlanningComponent,
    data: {
      title: 'Consulter PLanning'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsulterPlanningRoutingModule { }
