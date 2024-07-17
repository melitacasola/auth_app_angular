import { Component, inject, OnInit } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'home-admin-page',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  private apiService = inject(ApiRequestService);
  admins: string[] = [];
  selectedAdminIndex: number | null = null;

  ngOnInit(): void {
    this.apiService.getAdminsAll().subscribe(resp => {
      this.admins = resp;
    });
  }
  selectAdmin(index: number): void {
    this.selectedAdminIndex = index;
  }
}
