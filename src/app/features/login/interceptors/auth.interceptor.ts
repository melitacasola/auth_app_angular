import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private tokenService = inject(TokenService);

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = this.tokenService.getToken();
    console.log(token);

    if (request.url.includes('auth')) {
      return next.handle(request);
    }

    if (token) {
      const reqAuth = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(reqAuth);
    }

    return next.handle(request);
  }
}

// import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
// import { inject } from '@angular/core';
// import { TokenService } from '../services/token.service';

// export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
//   // Inject the current `AuthService` and use it to get an authentication token:
//   const authToken = inject(TokenService).getToken();
//   // Clone the request to add the authentication header.
//   const newReq = req.clone({headers: {
//     req.headers.append('X-Authentication-Token', authToken),
//   }});
//   return next(newReq);
// }
