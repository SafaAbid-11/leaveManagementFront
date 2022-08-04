import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeCongesComponent } from './demande-conges.component';
const routes: Routes = [
  {
    path: '',
    component: DemandeCongesComponent,
    data: {
      title: 'Mes demandes'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeCongeRoutingModule { }
