import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  sectorData;
  lastRefreshed;
  companyProfiles = [];
  Energy;
  Industrial;
  Materials;
  Staples;
  Financials;
  Utilities;
  RealEstate;
  Discretionary;
  CommunicationService;
  IT;
  Healthcare;
  constructor(private Service:DataService){}

  ngOnInit() {
    this.Service.getSectorPerformances().subscribe(sector =>{
        this.sectorData = sector['Rank A: Real-Time Performance'];
        this.lastRefreshed = sector['Meta Data']['Last Refreshed'];
        this.Energy = this.sectorData['Energy'];
        this.Industrial = this.sectorData.Industrials;
        this.Materials = this.sectorData.Materials;
        this.Staples = this.sectorData['Consumer Staples'];
        this.Financials = this.sectorData.Financials;
        this.Utilities = this.sectorData.Utilities;
        this.RealEstate = this.sectorData['Real Estate'];
        this.Discretionary = this.sectorData['Consumer Discretionary'];
        this.CommunicationService = this.sectorData['Communication Services'];
        this.IT = this.sectorData['Information Technology'];
        this.Healthcare = this.sectorData['Health Care']
  
    })
    this.Service.getNasdaqProfile().subscribe(NasdaqProfile =>{
     this.companyProfiles.push(NasdaqProfile);
    })
    this.Service.getGoldProfile().subscribe(GoldProfile =>{
      this.companyProfiles.push(GoldProfile)
    })
    this.Service.getDowProfile().subscribe(DowProfile =>{
      this.companyProfiles.push(DowProfile)
    })
    this.Service.getAlibabaProfile().subscribe(AlibabaProfile=>[
      this.companyProfiles.push(AlibabaProfile)
    ])
    console.log(this.companyProfiles)
  }

  
}
