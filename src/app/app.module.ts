import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HeroComponent} from './hero/hero.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {WhyUsComponent} from './why-us/why-us.component';
import {TeamComponent} from './team/team.component';
import {PartnersComponent} from './partners/partners.component';
import {CallToActionComponent} from './call-to-action/call-to-action.component';
import {ProductShieldComponent} from './product-shield/product-shield.component';
import {ProductGenComponent} from './product-gen/product-gen.component';
import {FooterComponent} from './footer/footer.component';
import {ProductRadarComponent} from './product-radar/product-radar.component';
import {ProductEnrichComponent} from './product-enrich/product-enrich.component';
import {HeroAnimatedImageComponent} from './hero/hero-animated-image/hero-animated-image.component';
import {HeroTextComponent} from './hero/hero-text/hero-text.component';
import {BlogsPageComponent} from "./blogs-page/blogs-page.component";
import {BlogsArticleComponent} from "./blogs-page/blogs-article/blogs-article.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AppRoutingModule} from "./app-routing.module";
import {BlogsMultipleComponent} from "./blogs-page/blogs-multiple/blogs-multiple.component";
import {BlogsSidebarComponent} from "./blogs-page/blogs-sidebar/blogs-sidebar.component";
import {ShareModule} from "ngx-sharebuttons";
import {BlogNewsSectionComponent} from "./blog-news-section/blog-news-section.component";

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
    HeroTextComponent,
    BlogNewsSectionComponent,
    BlogsPageComponent,
    BlogsArticleComponent,
    BlogsMultipleComponent,
    BlogsSidebarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    RouterModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
