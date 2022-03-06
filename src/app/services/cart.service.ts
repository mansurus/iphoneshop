import { Injectable } from '@angular/core';
import { CartItem, CartItemAccessory } from '../data/cart-item';
import { CART_ITEM_LIST, CART_ITEM_LIST_ACCESSORY } from '../data/cart-item-list';
import { Phone } from '../phones/phone';
import { Accessory } from '../accessories/accessory';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private alertifyService:AlertifyService) {}

  list(): CartItem[] {
    localStorage.setItem('cartInfo', CART_ITEM_LIST.toLocaleString());
    return CART_ITEM_LIST;
    
  }
  list2(): CartItemAccessory[] {
    localStorage.setItem('cartInfoAccessory', CART_ITEM_LIST_ACCESSORY.toLocaleString());
    return CART_ITEM_LIST_ACCESSORY;
    
  }

  addToCartPhone(phone: Phone): void {
    let addedItem = CART_ITEM_LIST.find(
      (c) => c.phone.id === phone.id
    );
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      let cartItem: CartItem = { phone: phone, quantity: 1 };
      CART_ITEM_LIST.push(cartItem);
    }
    this.alertifyService.success("Phone was added to the cart!")
  }
  addToCartAccessory(accessory: Accessory): void {
    let addedItemAccessory = CART_ITEM_LIST_ACCESSORY.find(
      (c) => c.accessory.id === accessory.id
    );
    if (addedItemAccessory) {
      addedItemAccessory.quantity += 1;
    } else {
      let cartItem: CartItemAccessory = {quantity: 1 , accessory:accessory};
      CART_ITEM_LIST_ACCESSORY.push(cartItem);
    }
    this.alertifyService.success("Accessory was added to the cart!")
  }


  clear() {
    CART_ITEM_LIST.splice(0, CART_ITEM_LIST.length);
  }

  totalPrice() {
    let totalPhone = 0;
    for (let i = 0; i < CART_ITEM_LIST.length; i++) {
      totalPhone =
      totalPhone +
        CART_ITEM_LIST[i].phone.price * CART_ITEM_LIST[i].quantity;
    }
    let totalAccessory = 0;
    for (let i = 0; i < CART_ITEM_LIST_ACCESSORY.length; i++) {
      totalAccessory =
      totalAccessory +
      CART_ITEM_LIST_ACCESSORY[i].accessory.price * CART_ITEM_LIST_ACCESSORY[i].quantity;
    }
    let total = totalPhone + totalAccessory;
    return total;
  }
}
