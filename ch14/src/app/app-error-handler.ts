import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    const err = error.rejection || error;

    if (err instanceof HttpErrorResponse) {
      switch(err.status) {
        case 0:
          console.error('Client error:', error.error);
          break;
        case HttpStatusCode.InternalServerError:
          console.error('Server error:', error.error);
          break;
        case HttpStatusCode.BadRequest:
          console.error('Request error:', error.error);
          break;
        default:
          console.error('Unknown error:', error.error);
      }
    } else {
      console.error('Application error:', err)
    }
  }

}
