import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'consulterPlanning',
    loadChildren: () => import('./consulter-planning/consulter-planning.module').then(m => m.ConsulterPlanningModule)
  },
  
]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollaborateurRoutingModule { }
