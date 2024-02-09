import { CanActivateFn ,Router} from '@angular/router';
import { AuthService } from './auth.service';
import {  inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  console.log('token', token)
  const router = inject(Router)
    
  if(token){

    console.log("in true",token)
    return true;
  }else{
    console.log("in false")

    router.navigate(['login'])
    return  false;
  }
 
};
