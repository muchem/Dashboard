import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) { }
  searchSymbol(queryString: string):Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${queryString}&apikey=UHKM95R37PUMWX1E`);
  }
  getBoeingData():Observable<any>{
    return this.http.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BA&interval=5min&apikey=UHKM95R37PUMWX1E`);
  }
}
