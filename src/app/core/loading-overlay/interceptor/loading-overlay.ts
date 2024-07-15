// import {
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Injectable, inject } from '@angular/core';
// import { Observable, finalize } from 'rxjs';
// import { LoadService } from '../loading-overlay.service';

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadService } from '../loading-overlay.service';
import { finalize } from 'rxjs';

// @Injectable()
// export class LoadInterceptor implements HttpInterceptor {
//   private loadService = inject(LoadService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler,
//   ): Observable<HttpEvent<unknown>> {
//     if (request.headers.get('X-LOADING') === 'false') {
//       return next.handle(request);
//     }
//     this.loadService.showLoader();
//     return next
//       .handle(request)
//       .pipe(finalize(() => this.loadService.hideLoader()));
//   }
// }
export const LoadInterceptor: HttpInterceptorFn = (req, next) => {
  const loadService = inject(LoadService);

  if (req.headers.get('X-LOADING') === 'false') {
    return next(req);
  }
  loadService.showLoader();
  return next(req).pipe(finalize(() => loadService.hideLoader()));
};
