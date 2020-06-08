import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsArticles;
  
  article; 

  article1Url;
  article1Headline;
  article1Image;
  article1Summary;

  article2Url;
  article2Headline;
  article2Image;
  article2Summary;
  constructor(private route:ActivatedRoute) { 
    this.article = this.route.snapshot.data['article'];
  }

  ngOnInit() {
   
    this.article1Url = this.article[0].url;
    this.article1Headline = this.article[0].headline;
    this.article1Image = this.article[0].image;
    this.article1Summary = this.article[0].summary;

    this.article2Url =this.article[1].url;
    this.article2Headline = this.article[1].headline;
    this.article2Image = this.article[1].image;
    this.article2Summary = this.article[1].summary;
    this.newsArticles = this.article.splice(2,15);
 
  }

}
