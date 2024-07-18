// import { Injectable, inject } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor,
//   HttpResponse,
// } from '@angular/common/http';
// import { Observable, tap } from 'rxjs';
// import { ToastrService } from 'ngx-toastr';

// @Injectable()
// export class NotificationInterceptor implements HttpInterceptor {
//   private toaster = inject(ToastrService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler,
//   ): Observable<HttpEvent<unknown>> {
//     return next.handle(request).pipe(
//       tap((event: HttpEvent<unknown>) => {
//         if (event instanceof HttpResponse && event.status === 200) {
//           this.toaster.success('Logged in successfully', 'Success');
//         }
//       }),
//     );
//   }
// }

import {
  HttpInterceptorFn,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const notificationInterceptor: HttpInterceptorFn = (req, next) => {
  const toastrService = inject(ToastrService);

  return next(req).pipe(
    tap((event: HttpEvent<unknown>) => {
      if (event instanceof HttpResponse && event.status === 200) {
        toastrService.success('Logged in successfully', 'Success');
      }
    }),
  );
};
