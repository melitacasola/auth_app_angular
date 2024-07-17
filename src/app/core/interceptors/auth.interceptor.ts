import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokenService } from '../services/token.service';
// import { environment } from '../../../environments/environment.development';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = inject(TokenService).getToken();
  // const acceptedReq = req.url.includes(environment.getsUrl);

  const stringToken = JSON.parse(authToken);
  if (stringToken) {
    const newReq = req.clone({
      headers: req.headers.set('Authorization', stringToken),
    });
    return next(newReq);
  }
  return next(req);
};
