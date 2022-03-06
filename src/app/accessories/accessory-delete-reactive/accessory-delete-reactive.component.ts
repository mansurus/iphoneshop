import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AccessoryService } from 'src/app/services/accessory.service';
import { Accessory } from '../accessory';

@Component({
  selector: 'app-accessory-delete-reactive',
  templateUrl: './accessory-delete-reactive.component.html',
  styleUrls: ['./accessory-delete-reactive.component.css'],
  providers: [AccessoryService]
})
export class AccessoryDeleteReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,
    private accessoryService:AccessoryService,
    private alertifyService:AlertifyService) { }
  
    accessoryDeleteForm:FormGroup;
    accessoryId=0;

  createAccessoryDeleteForm() {
    this.accessoryDeleteForm = this.formBuilder.group({
      id:["",Validators.required]
    })
  }

  ngOnInit(): void {
    this.createAccessoryDeleteForm();
  }

  delete(){
    if(this.accessoryDeleteForm.valid) {
      this.accessoryId = this.accessoryDeleteForm.get("id").value
    }
    this.accessoryService.deleteAccessory(this.accessoryId).subscribe(data=>{
      this.alertifyService.success("Accessory with ID "+ this.accessoryId + " was deleted successfully!")
    });
  }

}
