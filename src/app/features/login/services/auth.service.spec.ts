import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { AuthService } from './auth.service';
// import { TokenService } from './token.service';
import { IToken } from '../../../core/interfaces/auth.interface';
import { environment } from '../../../../environments/environment';

describe('AuthService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;
  // let tokenServiceTest: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      // providers: [MarvelService]
    });
    authService = TestBed.inject(AuthService);
    // tokenServiceTest = TestBed.inject(TokenService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(authService).toBeTruthy();
  });
  it('should use the method addNewItem to add a new Entry', fakeAsync(() => {
    const fakeBody = {
      username: 'admin',
      password: '123456',
    };
    const testToken: IToken = {
      access_token: 'jihdanelfgjasljmkfnecisorkjngfs.dkjvvsrrv33',
    };

    authService.login(fakeBody).subscribe(response => {
      expect(response).toEqual(testToken);
    });

    const request = httpMock.expectOne(
      req => req.method === 'POST' && req.url === environment.baseUrl,
    );
    request.flush(testToken);
    tick();
  }));
});
