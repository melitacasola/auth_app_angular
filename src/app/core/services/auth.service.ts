import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { IToken, ILoginForm } from '../interfaces/auth.interface';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private tokenService = inject(TokenService);
  private url = environment.baseUrl;
  private token?: IToken;

  login(loginForm: Partial<ILoginForm>): Observable<IToken> {
    return this.httpClient.post<IToken>(this.url, loginForm).pipe(
      tap(token => {
        this.token = token;
        this.tokenService.setToken(token);
      }),
    );
  }

  isLogged(): Observable<boolean> {
    if (!this.tokenService.getToken()) {
      return of(false);
    } else {
      return of(true);
    }
  }

  logout() {
    this.tokenService.clearToken();
  }
}
