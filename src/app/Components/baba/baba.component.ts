import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-baba',
  templateUrl: './baba.component.html',
  styleUrls: ['./baba.component.scss']
})
export class BabaComponent implements OnInit {
  CompanySymbol:string;
  Intrachart = [];
  intradayTime = [];
  intradayOpen = [];
  intradayHigh = [];
  intradayLow = []
  intraday;

  earningCalender;
  quarterlyEspChart = [];
  espCalenderDates = [];
  espEstimates = [];
  espActuals = [];
  trends;
  trendCharts = [];
  constructor(private Service:DataService,private route:ActivatedRoute) {
    this.intraday = Object.entries(this.route.snapshot.data['intraday']['Time Series (5min)']).splice(0,78).reverse();
   }
  ngOnInit() {
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
      
        }
      });
    this.Service.getRecommendationTrend('BABA').subscribe(trend =>{
      this.trends = trend[0];
      this.trendCharts = new Chart('trendChart',{
        type:'bar',
        data:{
          labels:["Alibaba Group Holding Limited"],
          datasets: [
            { 
              data: [this.trends['buy']],
              label: "Buy",
              borderColor: "#3e95cd",
              backgroundColor:'#3e95cd',
              fill: true
            },
            { 
              data:[ this.trends['hold']],
              label: "Hold",
              borderColor: "#de4f98",
              backgroundColor:'#de4f98',
              fill: true
            },
            { 
              data:[ this.trends['sell']],
              label: "Sell",
              borderColor: "#9a4fde",
              backgroundColor:'#9a4fde',
              fill: true
            },
            { 
              data: [this.trends['strongBuy']],
              label: "Strong Buy",
              borderColor: "#ffab14",
              backgroundColor:'#ffab14',
              fill: true
            },
            { 
              data: [this.trends['strongSell']],
              label: "Strong Sell",
              borderColor: "#4b14ff",
              backgroundColor:"#4b14ff",
              fill: true
            }
          ]
        },
        options: {
          title: {
						display: true,
						text: 'Analyst Recomendation'
          }
        }
      })
    }) 
    
    this.Service.getEarningsCalender('BABA').subscribe(calender =>{
      this.earningCalender = calender['earningsCalendar'];
      for(let i = 0; i< this.earningCalender.length; i++){
        this.espCalenderDates.push(this.earningCalender[i].date);
        this.espActuals.push(this.earningCalender[i].epsActual);
        this.espEstimates.push(this.earningCalender[i].epsEstimate);
      }
      this.quarterlyEspChart = new Chart('espChart', {
        type:"bar",
        data:{
          labels: this.espCalenderDates.reverse(),
          datasets:[
            {
              data: this.espEstimates.reverse(),
              label: "Estimate",
              borderColor: "#3e95cd",
              backgroundColor:'#3e95cd',
              fill: true
            },
            {
              data: this.espActuals.reverse(),
              label: "Actual",
              borderColor: "#ffab14",
              backgroundColor:'#ffab14',
              fill: true
            }
          ]
        },
        options: {
          title: {
						display: true,
						text: 'Earnings Per Share'
					},
          scales: {
            xAxes: [{
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Date (Quarterly)'
              }
            }]
          }
        }
      })
    })
  }

}
