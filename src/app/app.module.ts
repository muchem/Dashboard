import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NasdaqIntradayResolverService } from './Services/Home-Component-Resolvers/nasdaq-intraday-resolver.service';
import { IntradayResolverService } from './Services/Result-Component-Resolvers/intraday-resolver.service';
import { DailyAdjustedResolver } from './Services/Result-Component-Resolvers/dailyAdjusted-resolver';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FavortiesComponent } from './Components/favorties/favorties.component';
import { AutoSuggestBarComponent } from './Components/auto-suggest-bar/auto-suggest-bar.component';
import { ResultComponent } from './Components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EconomyComponent } from './Components/economy/economy.component';
import { GoldComponent } from './Components/gold/gold.component';
import { DowComponent } from './Components/dow/dow.component';
import { NdaqComponent } from './Components/ndaq/ndaq.component';
import { BabaComponent } from './Components/baba/baba.component';
import { NewsComponent } from './Components/news/news.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { ForexComponent } from './Components/forex/forex.component';
import { BtcComponent } from './Components/btc/btc.component';
import { LtcComponent } from './Components/ltc/ltc.component';
import { EthComponent } from './Components/eth/eth.component';
import { BnbComponent } from './Components/bnb/bnb.component';
import { SlimLoadingBarModule  } from 'ng2-slim-loading-bar';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavortiesComponent,
    AutoSuggestBarComponent,
    ResultComponent,
    EconomyComponent,
    GoldComponent,
    DowComponent,
    NdaqComponent,
    BabaComponent,
    NewsComponent,
    CryptoComponent,
    ForexComponent,
    BtcComponent,
    LtcComponent,
    EthComponent,
    BnbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StorageServiceModule,
    BrowserAnimationsModule,
    SlimLoadingBarModule.forRoot()  
  ],
  providers: [DailyAdjustedResolver,IntradayResolverService, NasdaqIntradayResolverService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
