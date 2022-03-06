import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhonesComponent } from './phones/phones.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { PhoneFilterPipe } from './phones/phone-fi̇lter.pipe';
import { AlertifyService } from './services/alertify.service';
import { AccessoriesComponent } from './accessories/accessories.component';
import { PhoneAddReactiveComponent } from './phones/phone-add-reactive/phone-add-reactive.component';
import { AccessoryAddReactiveComponent } from './accessories/accessory-add-reactive/accessory-add-reactive.component';
import { PhoneUpdateReactiveComponent } from './phones/phone-update-reactive/phone-update-reactive.component';
import { PhoneDeleteReactiveComponent } from './phones/phone-delete-reactive/phone-delete-reactive.component';
import { AccessoryUpdateReactiveComponent } from './accessories/accessory-update-reactive/accessory-update-reactive.component';
import { AccessoryDeleteReactiveComponent } from './accessories/accessory-delete-reactive/accessory-delete-reactive.component';
import { AccessorySortPipe } from './accessories/accessory-sort.pipe';
import { AccessorySortAscPipe } from './accessories/accessory-sort-asc.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PhonesComponent,
    NavComponent,
    CategoryComponent,
    PhoneFilterPipe,
    AccessoriesComponent,
    PhoneAddReactiveComponent,
    AccessoryAddReactiveComponent,
    PhoneUpdateReactiveComponent,
    PhoneDeleteReactiveComponent,
    AccessoryUpdateReactiveComponent,
    AccessoryDeleteReactiveComponent,
    AccessorySortPipe,
    AccessorySortAscPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
