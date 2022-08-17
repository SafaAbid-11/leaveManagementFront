import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';

// // Pages

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: 'gestionnaire',
        loadChildren: () => import('./DemoPages/gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule)
      },
      {
        path: 'collaborateur',
        loadChildren: () => import('./DemoPages/Collaborateur/Collaborateur.module').then(m => m.CollaborateurModule)
      },

      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
