import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService  implements HttpInterceptor{


  constructor(private _authservice : AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = this._authservice.getToken()
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization : `Bearer ${token}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
