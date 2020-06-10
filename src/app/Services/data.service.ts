import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from "rxjs/operators";  
@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) { }
  selectedSynbol;
  
  searchSymbol(queryString: string):Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${queryString}&apikey=UHKM95R37PUMWX1E`);
  }
  getIntradayData(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol };
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${this.selectedSynbol.param.updates[0].value}&interval=5min&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getDaily(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol };
    return this.http.get<any>(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.selectedSynbol.param.updates[0].value}&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getRecommendationTrend(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/recommendation?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getPriceTargets(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/price-target?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getRevenue(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/calendar/earnings?symbol=${this.selectedSynbol.param.updates[0].value}&from=2018-01-01&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getEarningsCalender(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/calendar/earnings?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getEspSuprises(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/earnings?symbol=${this.selectedSynbol.param.updates[0].value}&token=bq3rdo7rh5rb0pdpg08g`)
  }
  getCompanyNews(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://finnhub.io/api/v1/company-news?symbol=${this.selectedSynbol.param.updates[0].value}&from=2020-01-01&to=2020-05-01&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getCryptoCurrency(companySymbol:string):Observable<any>{
    let symbol= new HttpParams().set('symbol',companySymbol);
    this.selectedSynbol = { param: symbol }; 
    return this.http.get<any>(`https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=${this.selectedSynbol.param.updates[0].value}&market=USD&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));;
  }
  getCryptoNews():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/news?category=crypto&token=bq3rdo7rh5rb0pdpg08g`);
  }
  getForexNews():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/news?category=forex&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getGeneralNews():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/news?category=general&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getEconomicCalender():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/calendar/economic?token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getSectorPerformances():Observable<any>{
    return this.http.get<any>(`https://www.alphavantage.co/query?function=SECTOR&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getNasdaqProfile():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/profile2?symbol=NDAQ&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getGoldProfile():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/profile2?symbol=GOLD&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getDowProfile():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/profile2?symbol=DOW&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getAlibabaProfile():Observable<any>{
    return this.http.get<any>(`https://finnhub.io/api/v1/stock/profile2?symbol=BABA&token=bq3rdo7rh5rb0pdpg08g`).pipe(delay(1000));
  }
  getBtcIndex():Observable<any>{
    return this.http.get<any>(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=BTC&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getLtcIndex():Observable<any>{
    return this.http.get<any>(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=LTC&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getEthIndex():Observable<any>{
    return this.http.get<any>(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=ETH&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }
  getBusdIndex():Observable<any>{
    return this.http.get<any>(`https://www.alphavantage.co/query?function=CRYPTO_RATING&symbol=BNB&apikey=UHKM95R37PUMWX1E`).pipe(delay(1000));
  }

 
}
