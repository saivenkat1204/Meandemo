import { Component,OnInit } from '@angular/core';
import{AuthService}  from '../auth.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerUserData = {
    email: '',
    password: ''
  }
  constructor(private auth:AuthService, private _router : Router){

  }

  ngOnInit(): void {  
  }
   
  register(){
        console.log(this.registerUserData);

    this.auth.registerUser(this.registerUserData).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token',res.token);
        this._router.navigate(['/special-events'])

      },
      err =>{
         console.log(err)
      }
    )
  }


}
