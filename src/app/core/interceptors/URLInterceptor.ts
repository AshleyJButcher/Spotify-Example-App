import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../tokens';


@Injectable()
export class URLInterceptor implements HttpInterceptor {
  constructor(@Inject(API_URL) private api_url: string) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.match(/^https?/))
      request = request.clone({
        url: this.api_url + request.url,
      });

    return next.handle(request);
  }
}
