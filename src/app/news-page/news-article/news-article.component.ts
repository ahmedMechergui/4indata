import { Component, OnInit } from '@angular/core';
import {IsPlatformBrowserService} from "../../shared/services/is-platform-browser.service";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css' , '../../blogs-page/blogs-article/blogs-article.component.css']
})
export class NewsArticleComponent implements OnInit {

  constructor(private isPlatformBrowserService : IsPlatformBrowserService) { }

  ngOnInit(): void {
    if (this.isPlatformBrowserService){
      window.scroll({behavior:"smooth",top:0});
    }
  }

}
