import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-shield',
  templateUrl: './product-shield.component.html',
  styleUrls: ['./product-shield.component.css', '../product-shield/product-shield.component.css']
})
export class ProductShieldComponent implements OnInit {
  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur est et illo, iste laudantium maiores'+
  'sapiente sed voluptates voluptatum. Dicta doloremque obcaecati quis. Accusamus consequatur ducimus id' +
  'impedit iusto quis.'
  isTextHidden = false;
  textShown: string;
  textHidden: string;
  fullText = this.description.slice();


  constructor() {
  }

  ngOnInit(): void {
    this.setDescription();
  }

  setDescription() {
    if (this.description.length > 285) {
      this.textHidden = this.description.slice(this.description.indexOf(' ', 285) + 1, this.description.length);
      this.textShown = this.description.slice(0, this.description.indexOf(' ', 285)) + '...';
      this.description = this.textShown;
      this.isTextHidden = true;
    }
  }


  showMore() {
    this.description = this.fullText;
    this.isTextHidden = false;
  }

  showLess() {
    this.description = this.textShown;
    this.isTextHidden = true;
  }
}
