import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { ValiderDemandeRoutingModule } from './valider-demande-routing.module';
import { ValiderDemandeComponent } from './valider-demande.component';
import { PropComponent } from './prop/prop.component';


@NgModule({
  declarations: [ValiderDemandeComponent, PropComponent],
  imports: [
    CommonModule,
    ValiderDemandeRoutingModule,
    PageTitleModule,
  ]
})
export class ValiderDemandeModule { }
