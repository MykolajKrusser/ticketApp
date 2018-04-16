import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  spacialEvents = []
  constructor(private _spacialEvents: EventService, private _router: Router) { }

  ngOnInit() {
    this._spacialEvents.getSpecialEvents()
    .subscribe(
      res =>this.spacialEvents = res,
      err => {
        if (err instanceof HttpErrorResponse){
          if (err.status === 401){
            this._router.navigate(['/login'])
          }
        }
      }
    )
  }
}
