import { Component,OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent  implements OnInit{

  events :any
  ngOnInit(): void {
    this.getevent();
    console.log("values from ",this.events)
  }
  constructor(  private event_service: EventService){

  }
  

  getevent():void {
    this.event_service.getevents().subscribe(
     
      data =>this.events = data,
      err => console.log(err)      
  )
    console.log("values from ",this.events)
  }
  
}
