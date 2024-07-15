import { Component, inject, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'home-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
})
export class CustomerPageComponent implements OnInit {
  private apiService = inject(ApiRequestService);
  private routeActive = inject(ActivatedRoute);
  customers: string[] = [];
  selectedCustomerIndex: number | null = null;

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe(resp => {
      this.customers = resp;
    });
  }

  selectCustomer(index: number): void {
    this.selectedCustomerIndex = index;
    console.log(index, 'soy un duindex');
    console.log(this.selectedCustomerIndex, 'soy un valor sleected');
  }
}
