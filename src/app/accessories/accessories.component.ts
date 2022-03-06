import { Component, OnInit } from '@angular/core';
import { Accessory } from './accessory';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { AccessoryService } from '../services/accessory.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css'],
  providers:[AccessoryService,CartService]
})
export class AccessoriesComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
     private accessoryService:AccessoryService, private cartService:CartService) { }
  title="Apple Accessories"
  sortByParam =""
  sortByParamAsc =""
  accessories : Accessory[] ;

  ngOnInit(): void {
      this.accessoryService.getAccessories().subscribe(data=>{
        this.accessories = data;
      })
  }

  addToCart(accessory) {
    this.cartService.addToCartAccessory(accessory);
    this.alertifyService.success("You have successfully added " + accessory.name + " to the cart!")
  }
  deletePriceSort() {
    this.sortByParam="";
    this.sortByParamAsc="";
  }
}
