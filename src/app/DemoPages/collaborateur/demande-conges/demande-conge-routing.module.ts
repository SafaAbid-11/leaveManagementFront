import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeCongesComponent } from './demande-conges.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {
    path: '',
    component: DemandeCongesComponent,
    data: {
      title: 'Mes demandes'
    }
  },
    {
      path:'form',
      component: FormComponent,
      data: {
        title: 'formulaire'
      }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeCongeRoutingModule { }
