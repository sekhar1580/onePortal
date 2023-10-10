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

  account_validation_messages = {
    'firstName': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
    }

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
    this.referalService.getResponse().subscribe(x => {
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
