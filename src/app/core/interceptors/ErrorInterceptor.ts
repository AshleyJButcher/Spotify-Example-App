import { ErrorHandler, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import { EMPTY, Observable, catchError, retry, throwError, timer } from 'rxjs';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private errorHandler: ErrorHandler) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry({
        count: 3,
        delay(error, retryCount) {
          if (error instanceof HttpErrorResponse && (error.status == 0 || error.status > 500))
            return timer(500 * retryCount ** 2);

          return throwError(() => error);
        },
      }),
      catchError((err, originalFailedObervable) => {
        this.errorHandler.handleError(err);

        return throwError(() => new Error(err.error.error.message));
        
        // TODO: 
        // NotfificationService.notifyError(error)
        // return EMPTY
      })
    );
  }
}
