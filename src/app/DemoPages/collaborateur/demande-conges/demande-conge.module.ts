import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';
import { DemandeCongeRoutingModule } from './demande-conge-routing.module';
import { DemandeCongesComponent } from './demande-conges.component';
import { PageTitleModule } from '../../../Layout/Components/page-title/page-title.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DemandeCongesComponent],
  imports: [
    CommonModule,
    DemandeCongeRoutingModule,
    FontAwesomeModule,
     NgbModule, FormsModule, ReactiveFormsModule, NgBootstrapFormValidationModule,
    PageTitleModule,
  ]
})
export class DemandeCongeModule { }
