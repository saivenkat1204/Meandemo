import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3000/register";
  private loginUrl = "http://localhost:3000/login";
  constructor(private http: HttpClient) { }

  registerUser(user: any) {
    return this.http.post<any>(this.registerUrl, user)
  };

  loginUser(data:{}){
   return  this.http.post(this.loginUrl,data)
  };

  loggedin(){
    return !!localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
