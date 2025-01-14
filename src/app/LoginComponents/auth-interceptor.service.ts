import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization',
          'Bearer ' + jwt)
      });
      console.log('Request Headers:', req.headers);
      console.log('Request Body:', req.body);
      return next.handle(cloned);
    } else {
      console.log('Request Headers:', req.headers);
      console.log('Request Body:', req.body);
      return next.handle(req);
    }

  }
 
}


