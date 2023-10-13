import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { API_URL } from './tokens';
import {
  HttpClient,
  HttpHandler,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { URLInterceptor } from './interceptors/URLInterceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ErrorInterceptor } from './interceptors/ErrorInterceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    // {
    //   provide: HttpClient,
    //   useClass: MyMuchBetterHttpClient
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: URLInterceptor,
      multi: true, // Append to array
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true, // Append to array
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true, // Append to array
    },
    // {
    //   provide: FormBuilder,
    //   useClass: MyMuchMoreAwesomeFormBuilder
    // }
  ],
})
export class CoreModule {}
