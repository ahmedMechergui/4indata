import {Component, OnInit} from '@angular/core';
import {IsPlatformBrowserService} from "../../shared/services/is-platform-browser.service";

@Component({
  selector: 'app-blogs-multiple',
  templateUrl: './blogs-multiple.component.html',
  styleUrls: ['./blogs-multiple.component.css', '../blogs-page.component.css']
})
export class BlogsMultipleComponent implements OnInit {

  constructor(private isPlatformBrowserService: IsPlatformBrowserService) {
  }

  ngOnInit(): void {
    if (this.isPlatformBrowserService.isPlatformBrowser()){
      window.scroll(0, 0);
    }
  }

}
