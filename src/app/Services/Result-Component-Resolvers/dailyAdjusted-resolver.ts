import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable} from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DailyAdjustedResolver implements Resolve<any>{
  constructor(private Service:DataService) {}
  resolve(route:ActivatedRouteSnapshot):Observable<any[]>{
    return this.Service.getDaily(route.paramMap.get('companySymbol'));
  }
}
