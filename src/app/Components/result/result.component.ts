import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit , OnChanges {
  CompanyName;
  checkCompanySymbol;
  CompanySymbol;
  stockValueChart = [];
  sampleChart =  [];
  trendCharts = [];
  dailyAdjusted;
  trends;

  constructor(private route:ActivatedRoute,private Service:DataService) {}
  ngOnChanges(change: SimpleChanges){
      if(change.CompanySymbol){
        console.log("Change in value");
      }
  }
  ngOnInit() {
    console.log("result component initiated")
    var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
    var africa = [86,114,106,106,107,111,133,221,783,2478];
    var asia = [282,350,411,502,635,809,947,1402,3700,5267];
    var europe = [168,170,178,190,203,276,408,547,675,734];
    var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
    var northAmerica = [6,3,2,2,7,26,82,172,312,433];
    this.route.paramMap.subscribe(params => {
      this.CompanyName = params.get('companyName');
      this.CompanySymbol = params.get('companySymbol');
    });
   
    this.sampleChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: years,//  labels: ['9:30am','','','','','','','','','','','', '10:30am','','','','','','','','','','','','11:30am','','','','','','','','','','','','12:30pm','','','','','','','','','','','','1:30pm','','','','','','','','','','','','2:30pm','','','','','','','','','','','','3:30pm','','','','','','4:00pm'],
        datasets: [
          { 
            data: africa,
            label: "Africa",
            borderColor: "#3e95cd",
            backgroundColor:'#3e95cd',
            fill: true
          },
          { 
            data: asia,
            label: "Asia",
            borderColor: "#de4f98",
            backgroundColor:'#de4f98',
            fill: true
          },
          { 
            data: europe,
            label: "Europe",
            borderColor: "#9a4fde",
            backgroundColor:'#9a4fde',
            fill: true
          },
          { 
            data: latinAmerica,
            label: "Latin America",
            borderColor: "#ffab14",
            backgroundColor:'#ffab14',
            fill: true
          },
          { 
            data: northAmerica,
            label: "North America",
            borderColor: "#4b14ff",
            backgroundColor:"#4b14ff",
            fill: true
          }
        ]
      }
    });
    this.Service.getDaily(this.CompanySymbol).subscribe(daily =>{
      this.dailyAdjusted =  Object.entries(daily['Time Series (Daily)']).splice(0,4);
    })
    this.Service.getRecommendationTrend(this.CompanySymbol).subscribe(trend =>{
      this.trends = trend;
      console.log(this.trends[0]);

    })
  /*  this.trendCharts = new Chart('trendChart',{
      type:'bar',
      data:{
        labels:'Company',
        datasets: [
          { 
            data: this.trends[0]['buy'],
            label: "Buy",
            borderColor: "#3e95cd",
            backgroundColor:'#3e95cd',
            fill: true
          },
          { 
            data: this.trends[0]['hold'],
            label: "Hold",
            borderColor: "#de4f98",
            backgroundColor:'#de4f98',
            fill: true
          },
          { 
            data: this.trends[0]['sell'],
            label: "Sell",
            borderColor: "#9a4fde",
            backgroundColor:'#9a4fde',
            fill: true
          },
          { 
            data: this.trends[0]['strongbuy'],
            label: "Strong Buy",
            borderColor: "#ffab14",
            backgroundColor:'#ffab14',
            fill: true
          },
          { 
            data: this.trends[0].strongSell,
            label: "Strong Sell",
            borderColor: "#4b14ff",
            backgroundColor:"#4b14ff",
            fill: true
          }
        ]
      }
    })
*/
  }
  ngOnDoCheck(){
    console.log(this.CompanySymbol);
  }
}
 