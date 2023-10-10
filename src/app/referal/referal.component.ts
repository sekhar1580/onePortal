import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReferalService } from '../referal.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.scss']
})
export class ReferalComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    revenueGenerated: new FormControl(),
    productSold: new FormControl(),
    fName: new FormControl(),
    fEmail: new FormControl(),
    fId: new FormControl(),
    fNumber: new FormControl(),
    requirement: new FormControl(),

    addLine1: new FormControl(),
    addLine2: new FormControl(),
    street: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    country: new FormControl(),
    zip: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    region: new FormControl()


  });

  result = "";

  constructor(private referalService: ReferalService, public dialog: MatDialog) {  }

  ngOnInit() {

  }

  submitProfile() {
    console.log(this.profileForm.controls.firstName.value);
    console.log(this.profileForm.controls.lastName.value);
    console.log(this.profileForm.controls.firstName.value);
    console.log(this.profileForm.controls.lastName.value);
    console.log(this.profileForm.controls.revenueGenerated.value);
    console.log(this.profileForm.controls.productSold.value);

    console.log(this.profileForm.controls.email.value);
    console.log(this.profileForm.controls.phoneNumber.value);
    console.log(this.profileForm.controls.addLine1.value);
    console.log(this.profileForm.controls.addLine2.value);
    console.log(this.profileForm.controls.street.value);
    console.log(this.profileForm.controls.state.value);
    console.log(this.profileForm.controls.city.value);
    console.log(this.profileForm.controls.country.value);
    console.log(this.profileForm.controls.region.value);
    console.log(this.profileForm.controls.zip.value);


    console.log(this.profileForm.controls.fEmail.value);
    console.log(this.profileForm.controls.fId.value);
    console.log(this.profileForm.controls.fNumber.value);
    console.log(this.profileForm.controls.fName.value);
    console.log(this.profileForm.controls.requirement.value);

    let payload = {
      "Customer_Name__c": this.profileForm.controls.firstName.value,
      "Requirement_Id__c": "a025g00000HLJaDAAX",
      "Products_Services_Sold__c": this.profileForm.controls.productSold.value,
      "Revenue_Generated__c": this.profileForm.controls.revenueGenerated.value
    }

    this.referalService.getResponse(payload).subscribe(x => {
      
      this.result = JSON.stringify(x);
      this.openDialog();
    });
  }

  openDialog() {
    this.dialog.open(ConfirmDialogComponent);
  }

  reset() {
    this.profileForm.controls.firstName.setValue("");
    this.profileForm.controls.lastName.setValue("")
    this.profileForm.controls.revenueGenerated.setValue("");
    this.profileForm.controls.productSold.setValue("");

    this.profileForm.controls.email.setValue("");
    this.profileForm.controls.phoneNumber.setValue("")
    this.profileForm.controls.addLine1.setValue("");
    this.profileForm.controls.addLine2.setValue("");
    this.profileForm.controls.street.setValue("");
    this.profileForm.controls.state.setValue("");
    this.profileForm.controls.city.setValue("")
    this.profileForm.controls.country.setValue("");
    this.profileForm.controls.region.setValue("");
    this.profileForm.controls.zip.setValue("");


    this.profileForm.controls.fEmail.setValue("");
    this.profileForm.controls.fId.setValue("")
    this.profileForm.controls.fNumber.setValue("");
    this.profileForm.controls.fName.setValue("");
    this.profileForm.controls.requirement.setValue("");
  }

}
