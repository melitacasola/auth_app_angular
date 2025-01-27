// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { HandleErrorService } from '../services/handle-error.service';
// import { NotificationService } from '../notification/notification.service';

// @Injectable()
// export class ErrorInterceptor implements HttpInterceptor {
//   constructor(
//     private errorService: HandleErrorService,
//     private notificationService: NotificationService,
//   ) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler,
//   ): Observable<HttpEvent<any>> {
//     return next.handle(request).pipe(
//       catchError((error: HttpErrorResponse) => {
//         let errorMsg: string;
//         if (error.error instanceof ErrorEvent) {
//           errorMsg = this.errorService.getClientMessage(error);
//           this.notificationService.showError(errorMsg);
//         } else {
//           errorMsg = this.errorService.getServerMessage(error);
//           this.notificationService.showError(
//             errorMsg,
//             `Error Code: ${this.errorService.getServerStatus(error)}`,
//           );
//         }
//         return throwError(errorMsg);
//       }),
//     );
//   }
// }
import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from '../services/handle-error.service';
import { NotificationService } from '../notification/notification.service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const errorService = inject(HandleErrorService);
  const notificationService = inject(NotificationService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg: string;
      if (error.error instanceof ErrorEvent) {
        errorMsg = errorService.getClientMessage(error);
        notificationService.showError(errorMsg);
      } else {
        errorMsg = errorService.getServerMessage(error);
        notificationService.showError(
          errorMsg,
          `Error Code: ${errorService.getServerStatus(error)}`,
        );
      }
      return throwError(() => new Error(errorMsg));
    }),
  );
};
