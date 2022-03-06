import { Phone } from "../phones/phone";
import { Accessory } from "../accessories/accessory";

export interface CartItem{
    quantity: number;
    phone:Phone;

}

export interface CartItemAccessory{
    quantity: number;
    accessory:Accessory;

}