import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PhoneAddReactiveComponent } from './phones/phone-add-reactive/phone-add-reactive.component';
import { AccessoryAddReactiveComponent } from './accessories/accessory-add-reactive/accessory-add-reactive.component';
import { PhonesComponent } from './phones/phones.component';
import { PhoneUpdateReactiveComponent } from './phones/phone-update-reactive/phone-update-reactive.component';
import { PhoneDeleteReactiveComponent } from './phones/phone-delete-reactive/phone-delete-reactive.component';
import { AccessoryUpdateReactiveComponent } from './accessories/accessory-update-reactive/accessory-update-reactive.component';
import { AccessoryDeleteReactiveComponent } from './accessories/accessory-delete-reactive/accessory-delete-reactive.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'',redirectTo:'phones',pathMatch:'full'},
  {path:'accessories',component:AccessoriesComponent},
  {path:'phones',component:PhonesComponent},
  {path:'phone-add',component:PhoneAddReactiveComponent},
  {path:'phone-update',component:PhoneUpdateReactiveComponent},
  {path:'phone-delete',component:PhoneDeleteReactiveComponent},
  {path:'accessory-add',component:AccessoryAddReactiveComponent},
  {path:'accessory-update',component:AccessoryUpdateReactiveComponent},
  {path:'accessory-delete',component:AccessoryDeleteReactiveComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

