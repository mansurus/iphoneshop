import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-update-reactive',
  templateUrl: './phone-update-reactive.component.html',
  styleUrls: ['./phone-update-reactive.component.css'],
  providers: [PhoneService]
})
export class PhoneUpdateReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private phoneService:PhoneService,
    private alertifyService:AlertifyService) { }
  
  phoneUpdateForm:FormGroup;
  phone:Phone = new Phone();

  createPhoneUpdateForm() {
    this.phoneUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
      price:["",Validators.required],
      imageUrl:["",Validators.required],
      color:["",Validators.required],
      screenSize:["",Validators.required],
      description:["",Validators.required],
      sku:["",Validators.required],
      phoneModel:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createPhoneUpdateForm();
  }

  update(){
    if(this.phoneUpdateForm.valid) {
      this.phone = Object.assign({}, this.phoneUpdateForm.value)
    }
    this.phoneService.updatePhone(this.phone).subscribe(data=>{
      this.alertifyService.success(data.name + " was updated successfully!")
    });
  }

}
