import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {
  spacialEvents = []
  constructor(private _spacialEvents: EventService) { }

  ngOnInit() {
    this._spacialEvents.getSpecialEvents()
    .subscribe(
      res =>this.spacialEvents = res,
      err => console.log(err)
    )
  }

}
