import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private toastr = inject(ToastrService);

  showSuccess(message: string, title?: string): void {
    this.toastr.success(message, title, {
      progressBar: true,
      closeButton: true,
      timeOut: 5000,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      toastClass: 'ngx-toastr success-toast', // Custom CSS class for styling
    });
  }
  showError(message: string, title?: string): void {
    this.toastr.error(message, title, {
      progressBar: true,
      closeButton: true,
      timeOut: 5000,
      progressAnimation: 'increasing',
      positionClass: 'toast-top-right',
      tapToDismiss: true,
      toastClass: 'ngx-toastr error-toast',
    });
  }
}
