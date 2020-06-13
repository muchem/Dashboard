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
import {  EspResolverService  } from './Services/Result-Component-Resolvers/esp-resolver.service';
import { CompanyNewsResolverService } from './Services/Result-Component-Resolvers/company-news-resolver.service';
import { NasdaqIntradayResolverService } from './Services/Home-Component-Resolvers/nasdaq-intraday-resolver.service';
import { GoldIntradayResolverService } from './Services/Home-Component-Resolvers/gold-intraday-resolver.service';
import { DowIntradayResolverService } from './/Services/Home-Component-Resolvers/dow-intraday-resolver.service';
import { AlibabaIntradayResolverService } from './Services/Home-Component-Resolvers/alibaba-intraday-resolver.service';
import { NasdaqProfileResolverService } from './Services/Home-Component-Resolvers/nasdaq-profile-resolver.service';
import { GoldProfileResolverService } from './Services/Home-Component-Resolvers/gold-profile-resolver.service';
import { DowProfileResolverService } from './Services/Home-Component-Resolvers/dow-profile-resolver.service';
import { AlibabaProfileResolverService } from './Services/Home-Component-Resolvers/alibaba-profile-resolver.service';
import { UsSectorResolverService } from './Services/Home-Component-Resolvers/us-sector-resolver.service';
import { BitcoinProfileResolverService } from './Services/Crypto-Component-Resolvers/bitcoin-profile-resolver.service';
import { LitecoinProfileResolverService } from './Services/Crypto-Component-Resolvers/litecoin-profile-resolver.service';
import { BinanceCoinProfileResolverService } from './Services/Crypto-Component-Resolvers/binance-coin-profile-resolver.service';
import { EthereumProfileResolverService } from './Services/Crypto-Component-Resolvers/ethereum-profile-resolver.service';
import { BitcoinDailyResolverService } from './Services/Crypto-Component-Resolvers/bitcoin-daily-resolver.service';
import { LitecoinDailyResolverService } from './Services/Crypto-Component-Resolvers/litecoin-daily-resolver.service';
import { BinanceCoinDailyResolverService } from './Services/Crypto-Component-Resolvers/binance-coin-daily-resolver.service';
import { NewsResolverService } from './Services/News-Component-Resolvers/news-resolver.service';
import { ForexNewsResolverService } from './Services/Forex-Component-Resolvers/forex-news-resolver.service';
import {  EthereumDailyResolverService } from './Services/Crypto-Component-Resolvers/ethereum-daily-resolver.service';
import { EconomicCalenderResolverService } from './Services/Economy-Component-Resolvers/economic-calender-resolver.service'
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
    { path:'Barrick Gold Corp/ABX.TO',component:GoldComponent,
      resolve:{
        intraday:GoldIntradayResolverService
      }
  },
    { path:'Dow Inc/DOW',component:DowComponent,
      resolve:{
        intraday:DowIntradayResolverService
      }
  },
    { path:'Alibaba Group Holding Ltd/BABA',component:BabaComponent,
      resolve:{
        intraday:AlibabaIntradayResolverService
      }
  },
  ]},
  { path:'',component:CryptoComponent,
    resolve:{
      btcIndex:BitcoinProfileResolverService,
      ltcIndex:LitecoinProfileResolverService,
      ethIndex:EthereumProfileResolverService,
      BusdIndex:BinanceCoinProfileResolverService
    },
  children:[
   { path:'Crypto',component:BtcComponent,
    resolve:{
      cryptoDaily:BitcoinDailyResolverService
    } 
  },
   { path:'Crypto/Bitcoin/BTC',component:BtcComponent,
    resolve:{
      cryptoDaily:BitcoinDailyResolverService
    }
  },
   { path:'Crypto/Litecoin/LTC',component:LtcComponent,
    resolve:{
      cryptoDaily:LitecoinDailyResolverService
    }
  },
   { path:'Crypto/Ethereum/ETH',component:EthComponent,
    resolve:{
      cryptoDaily:EthereumDailyResolverService
    }
  },
   { path:'Crypto/Binance Coin/BNB',component:BnbComponent,
    resolve:{
      cryptoDaily:BinanceCoinDailyResolverService
    }
  },
 ]},
  { path:'News',component:NewsComponent,
  resolve:{
    article:NewsResolverService
  }  
},
  {path: 'forex',component:ForexComponent,
  resolve:{
    forexNews:ForexNewsResolverService
  }
},
  { path:'economy',component:EconomyComponent,
     resolve:{
      EconomicCalender:EconomicCalenderResolverService
  }
},
  { path:'favorites',component:FavortiesComponent },     
  { path:'result/:companySymbol/:companyName',component: ResultComponent,
    resolve:{
      intraday:IntradayResolverService,
      dailyAdjusted:DailyAdjustedResolver,
      earningCalender:EspResolverService,
      companyNews:CompanyNewsResolverService
    }
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 