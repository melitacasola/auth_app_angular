import { Injectable } from '@angular/core';
import { IToken } from '../../../core/interfaces/auth.interface';
import * as jwt_decode from 'jwt-decode';
import { DecodedToken } from '../../../core/interfaces/role.interface';

@Injectable({ providedIn: 'root' })
export class TokenService {
  private TOKEN_KEY: string = 'token';

  setToken(token: IToken): void {
    sessionStorage.setItem(this.TOKEN_KEY, JSON.stringify(token));
  }

  getToken(): string {
    const tokenString = sessionStorage.getItem(this.TOKEN_KEY);
    // return tokenString ? JSON.parse(tokenString) : null;
    return tokenString as string;
  }

  // getDecodedToken(): string | null {
  //   const token = this.getToken();
  //   if (token) {
  //     return jwt_decode.jwtDecode(token);
  //   }
  //   return null;
  // }

  // getRole() {
  //   const decodedToken = this.getDecodedToken();
  //   return decodedToken;
  // }

  getDecodedToken(): DecodedToken | null {
    const token = this.getToken();
    if (token) {
      return jwt_decode.jwtDecode(token) as DecodedToken;
    }
    return null;
  }

  getRoleAndName(): { role: string; unique_name: string } | null {
    const decodedToken = this.getDecodedToken();
    if (decodedToken) {
      return {
        role: decodedToken.role,
        unique_name: decodedToken.unique_name,
      };
    }
    return null;
  }
  clearToken() {
    return sessionStorage.removeItem(this.TOKEN_KEY);
  }
}
