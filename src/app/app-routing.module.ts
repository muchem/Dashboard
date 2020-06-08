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
import { DailyAdjustedResolver } from './Services/Result-Component-Resolvers/dailyAdjusted-resolver';
import { IntradayResolverService } from './Services/Result-Component-Resolvers/intraday-resolver.service';
import { NasdaqIntradayResolverService } from './Services/Home-Component-Resolvers/nasdaq-intraday-resolver.service';
import { NasdaqProfileResolverService } from './Services/Home-Component-Resolvers/nasdaq-profile-resolver.service';
import { GoldProfileResolverService } from './Services/Home-Component-Resolvers/gold-profile-resolver.service';
import { DowProfileResolverService } from './Services/Home-Component-Resolvers/dow-profile-resolver.service';
import { AlibabaProfileResolverService } from './Services/Home-Component-Resolvers/alibaba-profile-resolver.service';
import { UsSectorResolverService } from './Services/Home-Component-Resolvers/us-sector-resolver.service';
import { BitcoinProfileResolverService } from './Services/Crypto-Component-Resolvers/bitcoin-profile-resolver.service';
import { LitecoinProfileResolverService } from './Services/Crypto-Component-Resolvers/litecoin-profile-resolver.service';
import { BinanceCoinProfileResolverService } from './Services/Crypto-Component-Resolvers/binance-coin-profile-resolver.service';
import { EthereumProfileResolverService } from './Services/Crypto-Component-Resolvers/ethereum-profile-resolver.service';
const routes: Routes = [
  { path:'',component:HomeComponent,
   resolve:{
    NasdaqProfile:NasdaqProfileResolverService,
    GoldProfile:GoldProfileResolverService,
    DowProfile:DowProfileResolverService,
    AlibabaProfile:AlibabaProfileResolverService,
 //sector:UsSectorResolverService
   },
  children:[
    { path:'',component:NdaqComponent,
      resolve:{
        intraday:NasdaqIntradayResolverService
      }
  },
    { path:'Nasdaq Inc/NDAQ',component:NdaqComponent,
      resolve:{
        intraday:NasdaqIntradayResolverService
        }
    },
    { path:'Barrick Gold Corp/ABX.TO',component:GoldComponent },
    { path:'Dow Inc/DOW',component:DowComponent },
    { path:'Alibaba Group Holding Ltd/BABA',component:BabaComponent },
  ]},
  { path:'',component:CryptoComponent,
    resolve:{
      btcIndex:BitcoinProfileResolverService,
      ltcIndex:LitecoinProfileResolverService,
      ethIndex:EthereumProfileResolverService,
      BusdIndex:BinanceCoinProfileResolverService
    },
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
  { path:'result/:companySymbol/:companyName',component: ResultComponent,
    resolve:{
      intraday:IntradayResolverService,
      dailyAdjusted:DailyAdjustedResolver
    }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 