import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bnb',
  templateUrl: './bnb.component.html',
  styleUrls: ['./bnb.component.scss']
})
export class BnbComponent implements OnInit {
  cryptoDaily;
  dailyDates = [];
  dailyValues = [];
  dailyChart = []
  constructor(private route:ActivatedRoute) {
    this.cryptoDaily = Object.entries(this.route.snapshot.data['cryptoDaily']['Time Series (Digital Currency Daily)']).splice(0,5);
   }
  ngOnInit() {
      for(let i = 0; i< this.cryptoDaily.length; i++){
        this.dailyDates.push(this.cryptoDaily[i][0]);
        this.dailyValues.push(this.cryptoDaily[i][1]['1a. open (USD)']);
      }
      this.dailyChart = new Chart('DailyChart', {
        type: 'line',
        data: {
        labels:this.dailyDates.reverse(),
          datasets: [
            { 
              data: this.dailyValues.reverse(),
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
						text: 'Binance Coin'
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
          
                sampleSize: 5
              },
              
              scaleLabel: {
                display: true,
                labelString: 'Date'
              }
            }]
          }
        }
    })
  }

}
