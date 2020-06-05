import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable, of, EMPTY } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DailyAdjustedResolver implements Resolve<any>{
  constructor(private Service:DataService,private route:ActivatedRoute) {}
  resolve(route:ActivatedRouteSnapshot):Observable<any[]>{
    return this.Service.getDaily(route.paramMap.get('companySymbol'));
  }
}
