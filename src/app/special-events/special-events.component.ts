import { Component,OnInit } from '@angular/core';
import { EventService} from '../event.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  
  specialEvents : any = [];

  constructor(private event_service : EventService, private _router :Router){
  
  }

  ngOnInit(): void {
   
    console.log("im  from special events")
    this.getSpecialEvents();
    
  }

  getSpecialEvents(){
    this.event_service.getSpecialEvents().subscribe(
     res=> this.specialEvents = res,
     err=>{
     if( err instanceof HttpErrorResponse){
        if(err.status == 401){
          this._router.navigate(['/login'])
        }
     }
     }
    )
 }
  
}

function getSpecialEvents() {
  throw new Error('Function not implemented.');
}

