import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService implements OnInit {

  private eventUrl = "http://localhost:3000/events";
  private special_event = "http://localhost:3000/special-events"

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  };


  getevents(){
     return this.http.get(this.eventUrl)
  }

  getSpecialEvents (){
    return  this.http.get(this.special_event)
  }
}
