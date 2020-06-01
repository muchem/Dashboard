import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-ltc',
  templateUrl: './ltc.component.html',
  styleUrls: ['./ltc.component.scss']
})
export class LtcComponent implements OnInit {

  constructor(private Service:DataService) { }
  cryptoDaily;
  dailyDates = [];
  dailyValues = [];
  dailyChart = []
  ngOnInit() {
    this.Service.getCryptoCurrency("LTC").subscribe(obj =>{
      this.cryptoDaily = Object.entries(obj['Time Series (Digital Currency Daily)']).splice(0,5);
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
						text: 'Litecoin'
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
    })
    })
  }

}
