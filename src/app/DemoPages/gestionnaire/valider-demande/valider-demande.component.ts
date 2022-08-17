import { Component,ViewChild, OnInit } from '@angular/core';
import { RequestService } from 'src/app/Services/request.service';
import {Request} from '../../../entities/request';
import {  Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PropComponent } from './prop/prop.component';

@Component({
  selector: 'app-valider-demande',
  templateUrl: './valider-demande.component.html',
  styles: []
})
export class ValiderDemandeComponent implements OnInit {

 
  heading = 'Valider les demandes';
  subheading = 'Ici ,Vous pouvez accepter ou refuser une demande de congés.';
  icon = 'lnr-picture text-danger';

  requests:Request[];
  modalReferenceAddAuthority: any;
  
  constructor(private requestService :RequestService,
    private router:Router,
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
   reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });
}
  accept(id:number) {
    this.requestService.updateRequestStatus(id,"acceptée")
    .subscribe((data)=>{
      console.log(data);
    });
    this.reloadCurrentRoute();
  }
  deny(id:number) {
    this.requestService.updateRequestStatus(id,"refusée")
    .subscribe((data)=>{
      console.log(data);
    });
    this.reloadCurrentRoute();
    
  }
  openModal() {
    this.modalReferenceAddAuthority = this.modalService.open(PropComponent, {
      size: "lg",
      backdrop: "static",
      keyboard: false,
    });
  }

}
