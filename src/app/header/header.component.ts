import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

@ViewChild('header') header : any ;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // all sections here are directed to home with route ''
  // if you want to redirect to other pages just change the link
  redirectToSection(isHomeTopSectionLink?): void {
    if (this.router.routerState.snapshot.url !== '/') {
      this.router.navigate(['']).then();
    }
    // when we're on another page and click acceuil , the header is shown and not hidden as it is supposed to , this line fixes it
    if (isHomeTopSectionLink){
      this.header.nativeElement.classList.remove('header-scrolled','box-shadow');
    }
  }

  redirectToBlog(event:Event): void {
    if (this.router.routerState.snapshot.url !== '/') {
      this.router.navigate(['blogs']).then();
      event.preventDefault()
    }
  }

  redirectToNews(event:Event): void {
    if (this.router.routerState.snapshot.url !== '/') {
      this.router.navigate(['news']).then();
      event.preventDefault()
    }
  }




}
