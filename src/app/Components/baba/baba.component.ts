import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-baba',
  templateUrl: './baba.component.html',
  styleUrls: ['./baba.component.scss']
})
export class BabaComponent implements OnInit {

  constructor(private Service:DataService) { }
  CompanySymbol:string;
  Intrachart = [];
  intradayTime = [];
  intradayOpen = [];
  intradayHigh = [];
  intradayLow = []
  intraday;
  ngOnInit() {
    this.Service.getIntradayData('BABA').subscribe(value =>{
      this.intraday = Object.entries(value['Time Series (5min)']).splice(0,78).reverse();
      for(let i = 0; i<this.intraday.length; i++){
        this.intradayTime.push(this.intraday[i][0]);
        this.intradayOpen.push(this.intraday[i][1]["1. open"])
        this.intradayHigh.push(this.intraday[i][1]["2. high"]);
        this.intradayLow.push(this.intraday[i][1]["3. low"])
      }
      this.Intrachart = new Chart('intradayChart', {
        type: 'line',
        data: {
        labels:this.intradayTime,
          datasets: [
            { 
              data: this.intradayOpen,
              label: "Open",
              pointRadius: 1,
              lineTension: 0,
              borderWidth: 2,
              borderColor: "#3e95cd",
              backgroundColor:'#3e95cd',
              fill:false
            }
            
          ]
        },
        options: {
          title: {
						display: true,
						text: 'Alibaba Group Holding Limited'
					},
          scales: {
            xAxes: [{
              display: true,
              offset: true,
              ticks: {
                major: {
                  enabled: true,
                  fontStyle: 'bold'
                },
                source: 'data',
                autoSkip: true,
                autoSkipPadding: 75,
                maxRotation: 0,
                sampleSize: 79
              },
              
              scaleLabel: {
                display: true,
                labelString: 'US/Eastern'
              }
            }]
          }
        },
        tooltips: {
          intersect: false,
          mode: 'index',
          callbacks: {
            label: function(tooltipItem, myData) {
              var label = myData.datasets[tooltipItem.datasetIndex].label || '';
              if (label) {
                label += ': ';
              }
              label += parseFloat(tooltipItem.value).toFixed(2);
              return label;
            }
          }
        }
      });
    })
  }

}
