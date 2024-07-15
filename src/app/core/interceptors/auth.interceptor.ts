// import { inject, Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { TokenService } from '../services/token.service';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   private tokenService = inject(TokenService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler,
//   ): Observable<HttpEvent<unknown>> {
//     const token = this.tokenService.getToken();

//     if (token) {
//       const reqAuth = request.clone({
//         headers: request.headers.set('Authorization', `Bearer ${token}`),
//       });
//       return next.handle(reqAuth);
//     }

//     return next.handle(request);
//   }
// }

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(TokenService).getToken();

  const stringToken = JSON.parse(authToken);
  if (authToken) {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', stringToken),
    });
    return next(newReq);
  }
  return next(req);
};
