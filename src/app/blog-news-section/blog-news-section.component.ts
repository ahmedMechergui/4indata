import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ScriptsLoaderService} from "../shared/services/scripts-loader.service";


@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-news-section.component.html',
  styleUrls: ['./blog-news-section.component.css']
})
export class BlogNewsSectionComponent implements OnInit {

  @Input() section;

  constructor(private router: Router , private ScriptsLoader : ScriptsLoaderService) {
  }

  ngOnInit(): void {
    this.loadScripts();
  }

  loadScripts() : void {
    this.ScriptsLoader.addManyScriptsAsync('assets/js/carousel-blog-section.js').then();
  }

  redirectToSection(): void {
    this.router.navigate(['blogs']).then();
  }

}
