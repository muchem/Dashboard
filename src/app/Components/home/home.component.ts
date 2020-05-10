import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sectorData;
  lastRefreshed;
  constructor(private Service:DataService){}

  ngOnInit() {
    this.Service.getSectorPerformances().subscribe(sector =>{
        this.sectorData = sector['Rank A: Real-Time Performance'];
        this.lastRefreshed = sector['Meta Data']['Last Refreshed'];
    })
  }

  
}
