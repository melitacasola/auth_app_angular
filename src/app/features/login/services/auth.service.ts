import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IToken, ILoginForm } from '../../../core/interfaces/auth.interface';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private httpClient = inject(HttpClient);
  private url = 'http://localhost:49220/api/login/authenticate';
  private token?: IToken;
  private tokenService = inject(TokenService);

  login(loginForm: Partial<ILoginForm>): Observable<IToken> {
    return this.httpClient.post<IToken>(this.url, loginForm).pipe(
      tap(token => {
        this.token = token;
        this.tokenService.setToken(token);
      }),
    );
  }

  get isLogged() {
    return this.token ? true : false;
  }
  logout() {
    this.tokenService.clearToken();
  }
}
