import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  CompanyName;
  CompanySymbol;
  chart = [];
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.CompanyName = params.get('companyName');
      this.CompanySymbol = params.get('companySymbol');
    });
    this.chart = new Chart('canvas', {
      type: 'line',
    data: {
      labels: ['9:30am','','','','','','','','','','','', '10:30am','','','','','','','','','','','','11:30am','','','','','','','','','','','','12:30pm','','','','','','','','','','','','1:30pm','','','','','','','','','','','','2:30pm','','','','','','','','','','','','3:30pm','','','','','','4:00pm'],
      datasets: [{
        label: 'Opening Values',
        data: [],
        fill: true
      }]
    },
    options: {
      title: {
        display: true,
        text: ''
      },
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'nearest',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Time (US/Eastern)'
          }
        }],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Value (USD)'
          }
        }]
      }
    }
    
    })
  }

}
 