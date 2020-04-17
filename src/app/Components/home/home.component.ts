import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  chart = [];
  res;
  times = ['9:30:00','9:35:00','9:40:00','9:45:00','9:50:00','9:55:00','10:00:00']
  constructor(private Service:DataService){}

  ngOnInit() {
	  let today = new Date();
	  console.log(today.getTime());
	this.Service.getBoeingData().subscribe(info =>{
		this.res = Object.entries(info["Time Series (5min)"]);
		console.log(this.res[0]);
	})

  
  }

  
}
