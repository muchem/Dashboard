import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsArticles;
  
  article1Url;
  article1Headline;
  article1Image;
  article1Summary;

  article2Url;
  article2Headline;
  article2Image;
  article2Summary;
  constructor(private Service:DataService) { }

  ngOnInit() {
    this.Service.getGeneralNews().subscribe(article => {
    this.article1Url = article[0].url;
    this.article1Headline = article[0].headline;
    this.article1Image = article[0].image;
    this.article1Summary = article[0].summary;

    this.article2Url = article[1].url;
    this.article2Headline = article[1].headline;
    this.article2Image = article[1].image;
    this.article2Summary = article[1].summary;
    this.newsArticles = article.splice(2,15);
     console.log(this.newsArticles)
    })
  }

}
