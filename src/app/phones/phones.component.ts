import { Component, OnInit } from '@angular/core';
import { Phone } from './phone';
import { AlertifyService } from '../services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { PhoneService } from '../services/phone.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css'],
  providers:[PhoneService,CartService]
})
export class PhonesComponent implements OnInit {

  constructor(private alertifyService:AlertifyService,
     private phoneService:PhoneService, private cartService:CartService) { }
  title="iPhone Models"
  filterText =""
  phones : Phone[] ;

  ngOnInit(): void {
      this.phoneService.getPhones().subscribe(data=>{
        this.phones = data;
      })
  }

  addToCart(phone) {
    this.cartService.addToCartPhone(phone);
    this.alertifyService.success("You have successfully added " + phone.phoneModel + " to the cart!")
  }
}
