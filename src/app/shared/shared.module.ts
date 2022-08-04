import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormModalComponent } from "./form-modal/form-modal.component";

@NgModule({
  declarations: [FormModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  exports: [FormModalComponent]
})
export class SharedModule { }