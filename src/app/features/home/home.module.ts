import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './pages/adminPage/admin.component';
import { CustomerPageComponent } from './pages/customer-page/customer-page.component';

@NgModule({
  declarations: [HomeComponent, AdminComponent, CustomerPageComponent],
  imports: [CommonModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
