import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  selectedSynbol;
  
  searchSymbol(queryString: string):Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${queryString}&apikey=UHKM95R37PUMWX1E`);
  }
  getBoeingData():Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BA&interval=5min&apikey=UHKM95R37PUMWX1E`);
  }
  getDaily(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('query',companySymbol);
    this.selectedSynbol = { param: symbol };
    return this.http.get<any>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.selectedSynbol.param.updates[0].value}&apikey=UHKM95R37PUMWX1E`);
  }
  getRecommendationTrend(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('query',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/recommendation?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getPriceTargets(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('query',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/price-target?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getRevenue(companySymbol:string){
    let symbol= new HttpParams().set('query',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/calendar/earnings?from=2018-01-01&symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getEarningsCalender(companySymbol:string){
    let symbol= new HttpParams().set('query',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/calendar/earnings?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
}
