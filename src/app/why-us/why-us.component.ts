import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {
  showSecondParagraph = false;
  constructor() { }

  ngOnInit(): void {
  }

}
