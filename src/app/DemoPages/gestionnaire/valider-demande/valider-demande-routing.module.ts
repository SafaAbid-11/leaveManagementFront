import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValiderDemandeComponent } from './valider-demande.component';

const routes: Routes = [
  {
    path: '',
    component: ValiderDemandeComponent,
    data: {
      title: 'valider demandes'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValiderDemandeRoutingModule { }
