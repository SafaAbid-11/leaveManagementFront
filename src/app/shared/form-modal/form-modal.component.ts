import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'form-modal',
  templateUrl: './form-modal.component.html',
})
export class FormComponent {
  constructor(public modalRef: MdbModalRef<FormComponent>) {}
}