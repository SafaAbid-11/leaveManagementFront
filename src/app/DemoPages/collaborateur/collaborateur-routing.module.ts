import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeCongesComponent } from './demande-conges/demande-conges.component';
const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Collaborateur',
      status: false
    },
    children: [
  {
    path: 'demandeConges',
    loadChildren: () => import('./demande-conges/demande-conge.module').then(m => m.DemandeCongeModule)
  },
  
]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborateurRoutingModule { }
