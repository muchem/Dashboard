import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  BTCDaily;
  btcDailyChart = [];
  btcDailyDates = [];
  BtcDailyValues = [];

  cryptoArticles;
  constructor(private Service:DataService) { }

  ngOnInit() {
    this.Service.getBitcoinCurrency().subscribe(ob =>{
      this.BTCDaily =  Object.entries(ob['Time Series (Digital Currency Daily)']).splice(0,5);
      console.log(this.BTCDaily);
      for(let i = 0; i< this.BTCDaily.length; i++){
        this.btcDailyDates.push(this.BTCDaily[i][0]);
        this.BtcDailyValues.push(this.BTCDaily[i][1]['1a. open (USD)']);
      }
      this.btcDailyChart = new Chart('BTChart', {
        type: 'line',
        data: {
        labels:this.btcDailyDates,
          datasets: [
            { 
              data: this.BtcDailyValues,
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
						text: 'Bitcoin'
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
  });
  this.Service.getCryptoNews().subscribe(articles =>{
    this.cryptoArticles = articles.splice(1,18);
 
  })
  }

}