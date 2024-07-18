import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOverlayComponent } from './loading-overlay/loading-overlay/loading-overlay.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoadInterceptor } from './loading-overlay/interceptor/loading-overlay';

import { authInterceptor } from './interceptors/auth.interceptor';
import { errorInterceptor } from './interceptors/handle-error';
import { notificationInterceptor } from './notification/notification.interceptor';

@NgModule({
  declarations: [LoadingOverlayComponent],
  imports: [CommonModule],
  providers: [
    provideHttpClient(withInterceptors([LoadInterceptor])),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideHttpClient(withInterceptors([errorInterceptor])),
    provideHttpClient(withInterceptors([notificationInterceptor])),
  ],
  exports: [LoadingOverlayComponent],
})
export class CoreModule {}
