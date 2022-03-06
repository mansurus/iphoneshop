import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AccessoryService } from 'src/app/services/accessory.service';
import { Accessory } from '../accessory';

@Component({
  selector: 'app-accessory-update-reactive',
  templateUrl: './accessory-update-reactive.component.html',
  styleUrls: ['./accessory-update-reactive.component.css'],
  providers: [AccessoryService]
})
export class AccessoryUpdateReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private accessoryService:AccessoryService,
    private alertifyService:AlertifyService) { }
  
    accessoryUpdateForm:FormGroup;
    accessory:Accessory = new Accessory();

  createAccessoryUpdateForm() {
    this.accessoryUpdateForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
      price:["",Validators.required],
      imageUrl:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createAccessoryUpdateForm();
  }

  update(){
    if(this.accessoryUpdateForm.valid) {
      this.accessory = Object.assign({}, this.accessoryUpdateForm.value)
    }
    this.accessoryService.updateAccessory(this.accessory).subscribe(data=>{
      this.alertifyService.success(data.name + " was updated successfully!")
    });
  }

}
