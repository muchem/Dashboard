import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NewsResolverService implements Resolve<any> {

  constructor(private Service:DataService) { }
  resolve():Observable<any[]>{
    return this.Service.getGeneralNews();
  }
}
