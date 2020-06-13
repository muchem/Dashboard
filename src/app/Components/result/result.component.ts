import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit{
  CompanyName:string;
  CompanySymbol:string;
  stockValueChart=[];
  sampleChart =  [];
  trendCharts = [];
  priceTargetChart = [];
  revenueEstimateChart = [];
  revenueEstimates;
  dailyAdjusted;
  trends;
  revenueLabels = [];
  revenueEstimate = [];
  revenueActuals = [];
  priceTarget;
  earningCalender;
  quarterlyEspChart = [];
  espCalenderDates = [];
  espEstimates = [];
  espActuals = [];

  intradayTime = [];
  intradayOpen = [];
  intradayHigh = [];
  intradayLow = []
  intraday;

  companyNews;
  majorDevelopments;

  constructor(private route:ActivatedRoute,private Service:DataService) {
    this.intraday = Object.entries(this.route.snapshot.data['intraday']['Time Series (5min)']).splice(0,78).reverse();
    this.dailyAdjusted = Object.entries(this.route.snapshot.data['dailyAdjusted']['Time Series (Daily)']).splice(0,4);
    this.earningCalender = this.route.snapshot.data['earningCalender'];
    this.companyNews =  this.route.snapshot.data['companyNews'].splice(0,6);
  }
  ngOnInit() {
 this.route.paramMap.subscribe(params => {
      this.CompanyName = params.get('companyName');
      this.CompanySymbol = params.get('companySymbol');
    });
    this.intraday = Object.entries(this.route.snapshot.data['intraday']['Time Series (5min)']).splice(0,78).reverse();
    for(let i = 0; i<this.intraday.length; i++){
      this.intradayTime.push(this.intraday[i][0 ]);
      this.intradayOpen.push(this.intraday[i][1]["1. open"]);
      this.intradayHigh.push(this.intraday[i][1]["2. high"]);
      this.intradayLow.push(this.intraday[i][1]["3. low"]);
    }
     this.sampleChart = new Chart('intradayChart', {
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
          },
          {
            data: this.intradayHigh,
            label: "High",
            pointRadius: 1,
            lineTension: 0,
            borderWidth: 2,
            borderColor: "#47cd5a",
            backgroundColor:'#47cd5a',
            fill:false
          },
          {
            data: this.intradayLow,
            label: "Low",
            pointRadius: 1,
            lineTension: 0,
            borderWidth: 2,
            borderColor: "#e52436",
            backgroundColor:'#e52436',
            fill:false
          }
          
        ]
      },
      options: {
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
  
    this.Service.getRecommendationTrend(this.CompanySymbol).subscribe(trend =>{
      this.trends = trend[0];
      this.trendCharts = new Chart('trendChart',{
        type:'bar',
        data:{
          labels:[this.CompanyName],
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
        }
      })
    })

    this.Service.getPriceTargets(this.CompanySymbol).subscribe(target =>{
      this.priceTarget = target;
      this.priceTargetChart = new Chart('targetChart',{
        type:'line',
        data:{
          labels:['Low', 'Median','high'],
          datasets: [
            { 
              data: [this.priceTarget['targetLow'],this.priceTarget['targetMedian'],this.priceTarget['targetHigh']],
              label: "Target Value",
              backgroundColor: "#ef6778",
              borderColor: "#ef6778",
              fill: false
            }
          ]
        }
      })
    })

   this.Service.getRevenue(this.CompanySymbol).subscribe(calender =>{
    this.revenueEstimates = calender['earningsCalendar']
    for(let i = 0; i < this.revenueEstimates.length; i++){
      this.revenueLabels.push(this.revenueEstimates[i].date);
      this.revenueEstimate.push(this.revenueEstimates[i].revenueEstimate);
      this.revenueActuals.push(this.revenueEstimates[i].revenueActual);
    }
    this.revenueEstimateChart = new Chart('revenueChart',{
      type:'line',
      data:{
        labels:this.revenueLabels.reverse(),
        datasets: [
          { 
            data: this.revenueEstimate.reverse(),
            label: "Estimate",
            borderColor: "#9a4fde",
            backgroundColor:'#9a4fde',
            fill: false
          },
          { 
            data: this.revenueActuals.reverse(),
            label: "Actual",
            borderColor: "#3e95cd",
            backgroundColor:'#3e95cd',
            fill: false
          },
        ]
      },
      options: {
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

      for(let i = 0; i< this.earningCalender.length; i++){
        this.espCalenderDates.push(this.earningCalender[i].period);
        this.espActuals.push(this.earningCalender[i].actual);
        this.espEstimates.push(this.earningCalender[i].estimate);
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

  }
  

  
}
 