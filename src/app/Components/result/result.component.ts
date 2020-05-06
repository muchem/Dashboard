import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
  stockValueChart: [];
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
  intradayValue = [];
  intraday;

  constructor(private route:ActivatedRoute,private Service:DataService) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.CompanyName = params.get('companyName');
      this.CompanySymbol = params.get('companySymbol');
    });
   this.Service.getIntradayData(this.CompanySymbol).subscribe( value =>{
     this.intraday = Object.entries(value['Time Series (5min)']).splice(0,78).reverse();
     console.log(this.intraday);
     for(let i = 0; i<this.intraday.length; i++){
       this.intradayTime.push(this.intraday[i][0]);
       this.intradayValue.push(this.intraday[i][1]["1. open"])
     }
     this.sampleChart = new Chart('myChart', {
      type: 'line',
      data: {
      labels:this.intradayTime,
        // ['9:35am','','','','','','','','','','', '10:30am','','','','','','','','','','','','11:30am','','','','','','','','','','','','12:30pm','','','','','','','','','','','','1:30pm','','','','','','','','','','','','2:30pm','','','','','','','','','','','','3:30pm','','','','','','4:00pm'],
        datasets: [
          { 
            data: this.intradayValue,
            label: "Value",
            borderColor: "#de4f98",
            backgroundColor:'#de4f98',
            fill: false
          }
        ]
      }
    });
   })
    
    this.Service.getDaily(this.CompanySymbol).subscribe(daily =>{
      this.dailyAdjusted =  Object.entries(daily['Time Series (Daily)']).splice(0,4);
    })
    this.Service.getRecommendationTrend(this.CompanySymbol).subscribe(trend =>{
      this.Service.getDaily(this.CompanySymbol).subscribe(daily =>{
        this.dailyAdjusted =  Object.entries(daily['Time Series (Daily)']).splice(0,4);
      })
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
              borderColor: "#3e95cd",
              backgroundColor:'#3e95cd',
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

    this.priceTargetChart = new Chart('revenueChart',{
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

    this.Service.getEarningsCalender(this.CompanySymbol).subscribe(calender =>{
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
 