import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  indexOverviews = [];
  cryptoArticles;
  btcIndex;
  ltcIndex;
  ethIndex;
  BusdIndex;
  constructor(private Service:DataService,private route:ActivatedRoute) { 
    this.btcIndex = this.route.snapshot.data['btcIndex']['Crypto Rating (FCAS)'];
    this.ltcIndex = this.route.snapshot.data['ltcIndex']['Crypto Rating (FCAS)'];
    this.BusdIndex = this.route.snapshot.data['BusdIndex']['Crypto Rating (FCAS)'];
    this.ethIndex = this.route.snapshot.data['ethIndex']['Crypto Rating (FCAS)'];
   
  }

  ngOnInit() {
  this.indexOverviews.push(this.btcIndex);
  this.indexOverviews.push(this.ltcIndex);
  this.indexOverviews.push(this.BusdIndex);
  this.indexOverviews.push(this.ethIndex);

  this.Service.getCryptoNews().subscribe(articles =>{
    this.cryptoArticles = articles.splice(1,18);
  })
  }

}