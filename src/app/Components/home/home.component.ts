import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { ActivatedRoute } from '@angular/router';
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

  sector;

  NasdaqProfile;
  GoldProfile;
  DowProfile;
  AlibabaProfile;
  constructor(private Service:DataService,private route:ActivatedRoute,){
    this.NasdaqProfile = this.route.snapshot.data['NasdaqProfile'];
    this.GoldProfile = this.route.snapshot.data['GoldProfile'];
    this.DowProfile = this.route.snapshot.data['DowProfile'];
    this.AlibabaProfile = this.route.snapshot.data['AlibabaProfile'];
    this.sector = this.route.snapshot.data['sector'];
  }

  ngOnInit() {
    
        this.sectorData = this.sector['Rank A: Real-Time Performance'];
        this.lastRefreshed = this.sector['Meta Data']['Last Refreshed'];
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

     this.companyProfiles.push(this.NasdaqProfile);
      this.companyProfiles.push(this.GoldProfile)
      this.companyProfiles.push(this.DowProfile)
      this.companyProfiles.push(this.AlibabaProfile)

  }

  
}
