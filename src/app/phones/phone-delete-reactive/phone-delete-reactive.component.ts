import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-delete-reactive',
  templateUrl: './phone-delete-reactive.component.html',
  styleUrls: ['./phone-delete-reactive.component.css'],
  providers: [PhoneService]
})
export class PhoneDeleteReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private phoneService:PhoneService,
    private alertifyService:AlertifyService) { }
  
  phoneDeleteForm:FormGroup;
  phoneId=0;

  createPhoneDeleteForm() {
    this.phoneDeleteForm = this.formBuilder.group({
      id:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createPhoneDeleteForm();
  }

  delete(){
    if(this.phoneDeleteForm.valid) {
      this.phoneId = this.phoneDeleteForm.get("id").value
    }
    this.phoneService.deletePhone(this.phoneId).subscribe(data=>{
      this.alertifyService.success("iPhone with ID "+ this.phoneId + " was deleted successfully!")
    });
  }

}
