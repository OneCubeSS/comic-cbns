import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { ApiService } from '../app/api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private apiService: ApiService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.apiService.getToken();
    if (authToken != undefined) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + authToken,
        },
      });
    }
    return next.handle(req);
  }
}
