import { Component, OnInit } from '@angular/core';
import { CartItem, CartItemAccessory } from 'src/app/data/cart-item';
import { Phone } from '../phones/phone';
import { Accessory } from '../accessories/accessory';
import { CartService } from '../services/cart.service';
import { PhoneService } from '../services/phone.service';
import { AccessoryService } from '../services/accessory.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService,PhoneService,AccessoryService]
})
export class CartComponent implements OnInit {
  cartItemList : CartItem[]=[];
  cartItemListAccessory : CartItemAccessory[]=[];

  constructor(private cartService:CartService, private phoneService:PhoneService,private accessoryService:AccessoryService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart(){
    this.cartItemList = this.cartService.list();
    this.cartItemListAccessory = this.cartService.list2();
  }


  getTotal() {
    return this.cartService.totalPrice();
  }

}
