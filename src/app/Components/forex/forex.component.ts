import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-forex',
  templateUrl: './forex.component.html',
  styleUrls: ['./forex.component.scss']
})
export class ForexComponent implements OnInit {
  forexNews;
  constructor(private route:ActivatedRoute) {
    this.forexNews = this.route.snapshot.data['forexNews'].splice(1,18)
   }

  ngOnInit() {

  }

}
