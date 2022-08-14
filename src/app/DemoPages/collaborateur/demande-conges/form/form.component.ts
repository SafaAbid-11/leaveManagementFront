import { Component, OnInit , Optional} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Collaborateur } from 'src/app/entities/collaborateur';
import { Router } from '@angular/router';
import { LeaveType } from 'src/app/entities/leave-type';
import { Request } from 'src/app/entities/request';
import { LeaveTypeService } from '../Services/leave-type.service';
import { RequestService } from '../Services/request.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {

  heading = 'Mes demandes';
  subheading = 'Ici Vous pouvez effectuer une demande de congés.';
  icon = 'lnr-picture text-danger';

  request :Request=new Request();
  collaborator : Collaborateur =new Collaborateur();
  leaveType : LeaveType=new LeaveType();

  formGroup = new FormGroup({
    typeConge: new FormControl('', Validators.required),
    dateDeb: new FormControl('', Validators.required),
    dateFin: new FormControl('', Validators.required),
    durée: new FormControl(null, Validators.required),
    description:new FormControl('', Validators.required),
    agreeToTerms: new FormControl(false, Validators.required),
  
  });

  constructor( @Optional() private readonly activeModal: NgbActiveModal,
  private requestService :RequestService,
  private leaveTypeService :LeaveTypeService,
  private router:Router) {
  }

  ngOnInit() {
    
  }
 
  public handleValidSubmit() :void{
    console.log(this.formGroup.value);
     this.leaveTypeService.getLeaveTypeByTitle(this.formGroup.value.typeConge)
     .subscribe(data=>{
      console.log(data);
      this.request.leaveType=data;
    })
     this.request.startDate=this.formGroup.value.dateDeb;
     this.request.endDate=this.formGroup.value.dateFin;
     this.request.nbjAbs=this.formGroup.value.durée;
     this.request.leaveDesc=this.formGroup.value.description;
     console.log(this.request);
     
    this.saveRequest();
    this.activeModal.close();
    this.router.navigate(['/collaborateur/demandeConges']);
  }

  private saveRequest() {
    this.requestService.createRequest(this.request)
    .subscribe(data=> {
      console.log("this is my request",data);
      
    }, error =>console.log(error)
    );
    }
  handleReset() {
    this.formGroup.reset();
    if (this.activeModal)
    this.activeModal.dismiss();
  }

}
