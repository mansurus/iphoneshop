import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { PhoneService } from 'src/app/services/phone.service';
import { Phone } from '../phone';

@Component({
  selector: 'app-phone-add-reactive',
  templateUrl: './phone-add-reactive.component.html',
  styleUrls: ['./phone-add-reactive.component.css'],
  providers: [PhoneService]
})
export class PhoneAddReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private phoneService:PhoneService,
    private alertifyService:AlertifyService) { }
  
  phoneAddForm:FormGroup;
  phone:Phone = new Phone();

  createPhoneAddForm() {
    this.phoneAddForm = this.formBuilder.group({
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
    this.createPhoneAddForm();
  }

  add(){
    if(this.phoneAddForm.valid) {
      this.phone = Object.assign({}, this.phoneAddForm.value)
    }
    this.phoneService.addPhone(this.phone).subscribe(data=>{
      this.alertifyService.success(data.name + " was successfully added!")
    });
  }

}
