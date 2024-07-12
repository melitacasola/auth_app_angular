import { Injectable } from '@angular/core';
import { IToken } from '../../../core/interfaces/auth.interface';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private TOKEN_KEY: string = 'token';

  setToken(token: IToken): void {
    console.log('Setting token:', token);
    // console.log('Setting yaca:', JSON.stringify(token));
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getToken(): IToken | null {
    const tokenString = sessionStorage.getItem(this.TOKEN_KEY);
    console.log(tokenString, 'tokenstring');
    return tokenString ? JSON.parse(tokenString) : null;
  }

  clearToken() {
    return sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
