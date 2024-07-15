import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IToken, ILoginForm } from '../../../core/interfaces/auth.interface';
import { Observable, tap } from 'rxjs';
import { TokenService } from './token.service';
import { environment } from '../../../../environments/environment';

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

  get isLogged(): boolean {
    if (!this.tokenService.getToken()) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.tokenService.clearToken();
  }
}
