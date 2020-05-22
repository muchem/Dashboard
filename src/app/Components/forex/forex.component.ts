import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss']
})
export class ForexComponent implements OnInit {
  forexNews;
  constructor(private Service:DataService) { }

  ngOnInit() {
    this.Service.getForexNews().subscribe(articles =>{
      this.forexNews = articles.splice(1,18)
    })

  }

}
