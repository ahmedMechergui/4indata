import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css']
})
export class BlogSectionComponent implements OnInit {
  blogCount = [1, 2, 3]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectToSection(): void {
    this.router.navigate(['blogs']).then();
  }

}
