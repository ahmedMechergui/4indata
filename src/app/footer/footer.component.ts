import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  // all sections here are directed to home with route ''
  // if you want to redirect to other pages just change the link
  redirectToSection(): void {
    if (this.router.routerState.snapshot.url !== '/') {
      this.router.navigate([''],{}).then();
    }



  }

}
