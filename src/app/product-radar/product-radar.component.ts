import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-radar',
  templateUrl: './product-radar.component.html',
  styleUrls: ['./product-radar.component.css' , '../product-shield/product-shield.component.css']
})
export class ProductRadarComponent implements OnInit {

  description = '4INRADAR vous offre la possibilité d’écouter en temps réel les réseaux sociaux,' +
    'les comparateurs de prix, les forums ou encore les portails journalistiques.' +
    'Une vision à 360° qui peut être enrichie par vos propres outils et ressources (CRM, ERP, etc.)' +
    'et accompagne votre marketing au quotidien pour une meilleure appréhension du lien entre' +
    'l’espace numérique et votre entreprise.'

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
