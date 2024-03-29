import { Component,OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  loginUserData = {
    email: '',
    password: ''
  }

ngOnInit(): void {
  
  
}
 
constructor(private auth :AuthService, private _router:Router){

}
  
islogged(){

 return   !!localStorage.getItem('token')
}
login(){
  console.log(this.loginUserData);
  this.auth.loginUser(this.loginUserData).subscribe(
    (res:any)=>{
           console.log(res);
      localStorage.setItem('token',res.token);
      this._router.navigate(['/special-events'])

    },
    
      err => console.log(err)    
   
  )
}
}
