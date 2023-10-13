import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpClient,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private oauth: OAuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.oauth.getAccessToken(),
      },
    });

    return next.handle(request);
  }
}

// Chain of responsibility Pattern

/// HttpClient.get(r) => HttpClient.hander.handle(r)

//  obs = HttpClient.hander = IntA
//  IntA.hander = IntB
//  IntB.hander = IntC

//  IntC.hander = HttpHandler -> Observable