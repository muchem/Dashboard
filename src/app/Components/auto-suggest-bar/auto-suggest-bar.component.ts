import { Component, OnInit } from '@angular/core';
import { DataService } from '../../Services/data.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-auto-suggest-bar',
  templateUrl: './auto-suggest-bar.component.html',
  styleUrls: ['./auto-suggest-bar.component.scss']
})
export class AutoSuggestBarComponent implements OnInit {
  results;
 queryField: FormControl = new FormControl();
  constructor(private Service:DataService) { }

  ngOnInit() {
    this.queryField.valueChanges.subscribe(queryField =>this.Service.searchSymbol(queryField).subscribe(response => { 
      this.results = response.bestMatches;
      console.log(this.results);
    
    })
 );
 
  }
  
  }

