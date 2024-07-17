import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/adminPage/admin.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    AdminComponent,
    CustomerPageComponent,
    CustomerComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule, SharedModule],
})
export class HomeModule {}
