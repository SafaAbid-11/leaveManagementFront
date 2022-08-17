import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValiderDemandeComponent } from './valider-demande/valider-demande.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Gestionnaire',
      status: false
    },
    children: [
      {
        path: 'validerdemande',
        loadChildren: () => import('./valider-demande/valider-demande.module').then(m => m.ValiderDemandeModule)
      },
     
      
    ]
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
