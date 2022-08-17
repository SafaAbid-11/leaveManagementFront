import { Component,ViewChild, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router'; // import router from angular router
import {Request} from '../../../entities/request';
import { RequestService} from '../../../Services/request.service';
import { LeaveType } from 'src/app/entities/leave-type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';

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
  
 
  id :number;
  leaveType: LeaveType;
  requests:Request[];
  modalReferenceAddAuthority: any;


  constructor(
    private router:Router,
  private requestService :RequestService,
  private modalService: NgbModal) { 
    this.requests=[];
   
  }

  ngOnInit(): void {
    this.getRequests();
    
  }
 
  private getRequests() {
    this.requestService.getdata()
    .subscribe(data=>{
      console.log(data);
      this.requests=data;
    })
  }
 
 /*  private getLeaveTypeById(id:number) {
    this.leaveType=new LeaveType();
    this.requestService.getLeaveTypeById(id)
    .subscribe(data=>{
      console.log(data);
      this.leaveType=data;
    })
  } */
 
 
  openModal() {
    this.modalReferenceAddAuthority = this.modalService.open(FormComponent, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }
}
