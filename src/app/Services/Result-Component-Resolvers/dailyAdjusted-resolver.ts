import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { empty } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DailyAdjustedResolver implements Resolve<any>{
  constructor(private Service:DataService) {}
  resolve(route:ActivatedRouteSnapshot):Observable<any[]>{
    return this.Service.getDaily(route.paramMap.get('companySymbol')).pipe(
      catchError((error) => {
        console.log(error);
        return empty();
      }));
  }
}
