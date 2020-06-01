import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent implements OnInit {
  indexOverviews = [];
  cryptoArticles;
  constructor(private Service:DataService) { }

  ngOnInit() {

  this.Service.getBtcIndex().subscribe(btcIndex =>{
    this.indexOverviews.push(btcIndex['Crypto Rating (FCAS)']);
  })
  this.Service.getLtcIndex().subscribe(ltcIndex =>{
    this.indexOverviews.push(ltcIndex['Crypto Rating (FCAS)']);
  })
  this.Service.getEthIndex().subscribe(ethIndex =>{
    this.indexOverviews.push(ethIndex['Crypto Rating (FCAS)'])
  })
  this.Service.getBusdIndex().subscribe(BusdIndex =>{
    this.indexOverviews.push(BusdIndex['Crypto Rating (FCAS)'])
  })
  this.Service.getCryptoNews().subscribe(articles =>{
    this.cryptoArticles = articles.splice(1,18);
  })
  }

}