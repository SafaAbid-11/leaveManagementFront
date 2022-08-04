import { Component,ViewChild, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { FormComponent } from 'src/app/shared/form-modal/form-modal.component';

@Component({
  selector: 'app-demande-conges',
  templateUrl: './demande-conges.component.html',
  styles: []
})

export class DemandeCongesComponent implements OnInit {
    
  faPlus = faPlus;
  heading = 'Mes demandes';
  subheading = 'Ici Vous pouvez effectuer une demande de congés.';
  icon = 'lnr-picture text-danger';

  modalRef: MdbModalRef<FormComponent> | null = null;
  constructor(private modalService: MdbModalService) {

  }

  openModal() {
    this.modalRef = this.modalService.open(FormComponent,{
      data: { title: 'Custom title' },
    });
  }
  ngOnInit(): void {
  }
  
  
 
}
