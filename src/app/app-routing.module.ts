import { NgModule } from '@angular/core';
import { ResultComponent } from './Components/result/result.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FavortiesComponent } from './Components/favorties/favorties.component';
import { EconomyComponent } from './Components/economy/economy.component';
import { GoldComponent } from './Components/gold/gold.component';
import { DowComponent } from './Components/dow/dow.component';
import { NdaqComponent } from './Components/ndaq/ndaq.component';
import { BabaComponent } from './Components/baba/baba.component';
import { NewsComponent } from './Components/news/news.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ForexComponent } from './Components/forex/forex.component';
import { BtcComponent, } from './Components/btc/btc.component';
import { LtcComponent } from './Components/ltc/ltc.component';
import { EthComponent } from './Components/eth/eth.component';
import { BnbComponent } from './Components/bnb/bnb.component';
const routes: Routes = [
  { path:'',component:HomeComponent,
  children:[
    { path:'',component:NdaqComponent },
    { path:'Nasdaq Inc/NDAQ',component:NdaqComponent },
    { path:'Barrick Gold Corp/ABX.TO',component:GoldComponent },
    { path:'Dow Inc/DOW',component:DowComponent },
    { path:'Alibaba Group Holding Ltd/BABA',component:BabaComponent },
  ]},
  { path:'',component:CryptoComponent,
  children:[
   { path:'Crypto',component:BtcComponent },
   { path:'Crypto/Bitcoin/BTC',component:BtcComponent},
   { path:'Crypto/Litecoin/LTC',component:LtcComponent },
   { path:'Crypto/Ethereum/ETH',component:EthComponent },
   { path:'Crypto/Binance Coin/BNB',component:BnbComponent },
 ]},
  { path:'News',component:NewsComponent},
  {path: 'forex',component:ForexComponent},
  { path:'economy',component:EconomyComponent},
  { path:'favorites',component:FavortiesComponent },     
  { path:'result/:companySymbol/:companyName',component: ResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 