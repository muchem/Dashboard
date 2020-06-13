import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable} from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class EspResolverService implements Resolve<any> {

  constructor(private Service:DataService) { }
  resolve(route:ActivatedRouteSnapshot):Observable<any[]>{
    return this.Service.getEspSuprises(route.paramMap.get('companySymbol'));
  }
}
