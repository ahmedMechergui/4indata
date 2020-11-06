import {Component, OnInit} from '@angular/core';
import {IsPlatformBrowserService} from "../../shared/services/is-platform-browser.service";

@Component({
  selector: 'app-blogs-article',
  templateUrl: './blogs-article.component.html',
  styleUrls: ['./blogs-article.component.css']
})
export class BlogsArticleComponent implements OnInit {

  constructor(private isPlatformBrowserService : IsPlatformBrowserService) {
  }

  ngOnInit(): void {
    if (this.isPlatformBrowserService){
      window.scroll({behavior:"smooth",top:0});
    }
  }

}
