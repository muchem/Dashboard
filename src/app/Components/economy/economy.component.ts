import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss']
})
export class EconomyComponent implements OnInit {
  EconomicCalender;
  constructor(private route:ActivatedRoute) {
    this.EconomicCalender = this.route.snapshot.data['EconomicCalender']['economicCalendar']['result'];
   }

  ngOnInit() {}

}
