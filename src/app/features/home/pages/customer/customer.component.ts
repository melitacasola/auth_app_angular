import { Component, inject, Input, OnChanges } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  selector: 'app-customer',
  templateUrl: 'customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent implements OnChanges {
  private apiService = inject(ApiRequestService);
  @Input() userId!: number;
  user: string = '';

  // ngOnInit(): void {
  //   this.loadCustomer();
  // }

  ngOnChanges(): void {
    this.loadCustomer();
  }

  loadCustomer(): void {
    if (this.userId) {
      console.log(this.userId, 'customer componente');
      this.apiService.getCustomerId(this.userId).subscribe(data => {
        this.user = data;
      });
    }
  }
}
