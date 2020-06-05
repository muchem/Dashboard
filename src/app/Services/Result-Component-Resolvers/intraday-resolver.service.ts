import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Resolve,ActivatedRouteSnapshot } from '@angular/router';
import { DataService } from '../data.service';
@Injectable({
  providedIn: 'root'
})
export class IntradayResolverService implements Resolve<any>{
  constructor(private Service:DataService) { }
  resolve(route:ActivatedRouteSnapshot) :Observable<any[]>{
    return this.Service.getIntradayData(route.paramMap.get('companySymbol'));
  }
}
