import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { TeamComponent } from './team/team.component';
import { PartnersComponent } from './partners/partners.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { ProductShieldComponent } from './product-shield/product-shield.component';
import { ProductGenComponent } from './product-gen/product-gen.component';
import { FooterComponent } from './footer/footer.component';
import { ProductRadarComponent } from './product-radar/product-radar.component';
import { ProductEnrichComponent } from './product-enrich/product-enrich.component';
import { HeroAnimatedImageComponent } from './hero/hero-animated-image/hero-animated-image.component';
import { HeroTextComponent } from './hero/hero-text/hero-text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutUsComponent,
    WhyUsComponent,
    TeamComponent,
    PartnersComponent,
    CallToActionComponent,
    ProductShieldComponent,
    ProductGenComponent,
    FooterComponent,
    ProductRadarComponent,
    ProductEnrichComponent,
    HeroAnimatedImageComponent,
    HeroTextComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
