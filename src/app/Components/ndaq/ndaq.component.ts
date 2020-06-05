import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-ndaq',
  templateUrl: './ndaq.component.html',
  styleUrls: ['./ndaq.component.scss']
})
export class NdaqComponent implements OnInit {

  constructor(private Service:DataService) { }
CompanySymbol:string;
Intrachart = [];
intradayTime = [];
intradayOpen = [];
intradayHigh = [];
intradayLow = []
trends;
trendCharts = [];
intraday;
earningCalender;
quarterlyEspChart = [];
espCalenderDates = [];
espEstimates = [];
espActuals = [];
  ngOnInit() {
    this.Service.getIntradayData('NDAQ').subscribe(value =>{
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
						text: 'Nasdaq Inc.'
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
    this.Service.getRecommendationTrend('NDAQ').subscribe(trend =>{
      this.trends = trend[0];
      this.trendCharts = new Chart('trendChart',{
        type:'bar',
        data:{
          labels:["Nasdaq Inc"],
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
    
    this.Service.getEarningsCalender('NDAQ').subscribe(calender =>{
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
