import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AccessoryService } from 'src/app/services/accessory.service';
import { Accessory } from '../accessory';

@Component({
  selector: 'app-accessory-add-reactive',
  templateUrl: './accessory-add-reactive.component.html',
  styleUrls: ['./accessory-add-reactive.component.css'],
  providers: [AccessoryService]
})
export class AccessoryAddReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private accessoryService:AccessoryService,
    private alertifyService:AlertifyService) { }
  
    accessoryAddForm:FormGroup;
    accessory:Accessory = new Accessory();

  createAccessoryAddForm() {
    this.accessoryAddForm = this.formBuilder.group({
      id:["",Validators.required],
      name:["",Validators.required],
      price:["",Validators.required],
      imageUrl:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createAccessoryAddForm();
  }

  add(){
    debugger
    if(this.accessoryAddForm.valid) {
      this.accessory = Object.assign({}, this.accessoryAddForm.value)
    }
    this.accessoryService.addAccessory(this.accessory).subscribe(data=>{
      this.alertifyService.success(data.name + " was successfully added!")
    });
  }

}
