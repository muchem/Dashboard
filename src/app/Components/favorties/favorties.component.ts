import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-favorties',
  templateUrl: './favorties.component.html',
  styleUrls: ['./favorties.component.scss']
})
 
export class FavortiesComponent implements OnInit {
  Favorties;
  constructor() { }
  ngOnInit() {
    this.Favorties = JSON.parse(localStorage.getItem('Favorites'));
    console.log(this.Favorties);
  }

}
