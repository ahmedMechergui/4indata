import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gen',
  templateUrl: './product-gen.component.html',
  styleUrls: ['./product-gen.component.css','../product-shield/product-shield.component.css']
})
export class ProductGenComponent implements OnInit {

  description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores commodi corporis cum cumque' +
    'debitis dicta' +
    'dolorum eligendi facilis harum impedit in ipsa iste laboriosam magni minima minus natus odit officiis' +
    'possimus qui quos' +
    'reiciendis, suscipit totam? Consequatur, illo!' ;

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
