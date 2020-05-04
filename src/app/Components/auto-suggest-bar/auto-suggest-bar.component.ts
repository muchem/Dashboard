import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormControl } from '@angular/forms';
import { NavigationEnd , Router } from '@angular/router';
@Component({
  selector: 'app-auto-suggest-bar',
  templateUrl: './auto-suggest-bar.component.html',
  styleUrls: ['./auto-suggest-bar.component.scss']
})
export class AutoSuggestBarComponent implements OnInit {
  results;
  Subscription: any;
 queryField: FormControl = new FormControl();
  constructor(private Service:DataService, private router:Router) { }  
  ngOnInit() {
    this.queryField.valueChanges
    .subscribe(queryField =>this.Service.searchSymbol(queryField).subscribe(response => { 
      this.results = response.bestMatches;
    
    })  
 );
}
  reset(){
    this.queryField.setValue("");
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.Subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.router.navigated = false;
      }
    });
    if (this.Subscription) {
      this.Subscription.unsubscribe();
    }
  }
  }

