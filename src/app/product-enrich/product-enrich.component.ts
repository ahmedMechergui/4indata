import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-enrich',
  templateUrl: './product-enrich.component.html',
  styleUrls: ['./product-enrich.component.css', '../product-shield/product-shield.component.css']
})
export class ProductEnrichComponent implements OnInit {
  description = '4INDATA vous présente sa solution d’enrichissement des données 4INENRICH. ' +
    'Grâce à des algorithmes d’apprentissage profond, aux technologies de traitement automatique' +
    ' du langage et à son approche innovante de croisement de données structurées et non structurées,' +
    ' 4INENRICH vous permet d’analyser automatiquement vos données et de générer des données à plus' +
    ' haute valeur ajoutée. Que ce soit pour remplir des bases de données à partir de textes ou pour' +
    ' générer des descriptions à partir de données structurées, 4INENRICH vous permettra d’avoir des' +
    ' données plus précises, plus fiables et ainsi profiter d’un meilleur référencement. '
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
