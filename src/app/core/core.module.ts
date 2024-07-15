import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOverlayComponent } from './loading-overlay/loading-overlay/loading-overlay.component';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { LoadInterceptor } from './loading-overlay/interceptor/loading-overlay';
import { NotificationInterceptor } from './notification/notification.interceptor';
import { ErrorInterceptor } from './interceptors/handle-error';
import { authInterceptor } from '../features/login/interceptors/auth.interceptor';

@NgModule({
  declarations: [LoadingOverlayComponent],
  imports: [CommonModule],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
    provideHttpClient(withInterceptors([LoadInterceptor])),
    provideHttpClient(withInterceptors([authInterceptor])),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NotificationInterceptor,
      multi: true,
    },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  exports: [LoadingOverlayComponent],
})
export class CoreModule {}
