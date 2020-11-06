import { Component, OnInit } from '@angular/core';
import {IsPlatformBrowserService} from "../../shared/services/is-platform-browser.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-news-article',
  templateUrl: './news-article.component.html',
  styleUrls: ['./news-article.component.css' , '../../blogs-page/blogs-article/blogs-article.component.css']
})
export class NewsArticleComponent implements OnInit {
form : FormGroup
  constructor(private isPlatformBrowserService : IsPlatformBrowserService) { }

  ngOnInit(): void {
  this.initForm();
    if (this.isPlatformBrowserService){
      window.scroll({behavior:"smooth",top:0});
    }
  }

  initForm() {
    this.form = new FormGroup({
      name : new FormControl(),
      email : new FormControl(),
      comment : new FormControl()
    })
  }
}
