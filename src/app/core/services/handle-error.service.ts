import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  constructor() {}
  getClientMessage(error: Error): string {
    return error.message ? error.message : error.toString();
  }

  getClientStack(error: Error): string {
    return error.stack ? error.stack : '';
  }

  getServerMessage(error: HttpErrorResponse): string {
    return error.message;
  }

  getServerStatus(error: HttpErrorResponse): number {
    return error.status;
  }
}
