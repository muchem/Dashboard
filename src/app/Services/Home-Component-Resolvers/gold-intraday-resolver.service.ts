import { Injectable } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { Observable } from 'rxjs/Observable';
import { Resolve, Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
@Injectable({
  providedIn: 'root'
})
export class GoldIntradayResolverService implements Resolve<any>{

  constructor(private Service:DataService, private router:Router) { }
  resolve():Observable<any[]>{
    return this.Service.getIntradayData('GOLD').map(response => {
      if(response){
        return response;
        console.log("Responce Returned");
      }
      console.log("error");
      this.router.navigate(['/','Barrick Gold Corp','/','ABX.TO']).then(nav =>{
        console.log(nav);
        return Observable.of(null);
      }, err => {
        console.log(err);
      })
    }).catch(error => {
      console.log(error)
      this.router.navigate(['/','Barrick Gold Corp','/','ABX.TO']).then(nav =>{
        console.log(nav);
      }, err =>{
        console.log(err);
      });
      return Observable.of(null);
    })
  }
}
