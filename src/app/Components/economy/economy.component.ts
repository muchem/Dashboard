import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss']
})
export class EconomyComponent implements OnInit {
  EconomicCalender;
  constructor(private Service:DataService) { }

  ngOnInit() {
    this.Service.getEconomicCalender().subscribe(event =>{
      this.EconomicCalender = event['economicCalendar']['result'];
  
    })
  }

}
