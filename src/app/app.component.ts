import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulardemo';
  
 isaccountlogged: boolean = false;
 
 hostUrl =environment.hostURl;
 port = environment.port;
 
constructor(){
  this.islogged();
  console.log('this.islogged()', this.islogged())
}

  islogged(){
    return  this.isaccountlogged = !!localStorage.getItem('token')
   };

   logout(){
    alert("logout")
    localStorage.removeItem('token')
   }
}
