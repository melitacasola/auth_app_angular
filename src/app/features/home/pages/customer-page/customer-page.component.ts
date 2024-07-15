import { Component, inject, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'home-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrl: './customer-page.component.scss',
})
export class CustomerPageComponent implements OnInit {
  private apiService = inject(ApiRequestService);
  customers: string[] = [];

  ngOnInit(): void {
    this.apiService.getCustomers().subscribe(resp => (this.customers = resp));
  }

  // customers$!: Observable<string[]>;

  // ngOnInit(): void {
  //   this.customers$ = this.apiService.getCustomers();
  // }
}
