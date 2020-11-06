import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-gen',
  templateUrl: './product-gen.component.html',
  styleUrls: ['./product-gen.component.css','../product-shield/product-shield.component.css']
})
export class ProductGenComponent implements OnInit {

  description = '4INGEN est une solution innovante de génération automatique de textes.' +
    ' Avoir du contenu diversifié et de qualité est le garant d’un bon référencement' +
    ' et ce dernier d’une bonne visibilité. 4INDATA vous propose de générer de ' +
    'manière automatique et massive des textes plus ou moins longs sur les thématiques' +
    ' de votre choix en respectant la syntaxe et la terminologie souhaitées. Ce robot' +
    ' rédacteur libérera vos rédacteurs des tâches de rédaction chronophages et répétitives.' +
    ' La solution est disponible à la demande en temps réel ou en one shot. '

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
