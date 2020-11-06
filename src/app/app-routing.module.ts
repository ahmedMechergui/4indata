import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BlogsPageComponent} from "./blogs-page/blogs-page.component";
import {BlogsArticleComponent} from "./blogs-page/blogs-article/blogs-article.component";
import {BlogsMultipleComponent} from "./blogs-page/blogs-multiple/blogs-multiple.component";
import {NewsPageComponent} from "./news-page/news-page.component";
import {NewsMultipleComponent} from "./news-page/news-multiple/news-multiple.component";
import {NewsArticleComponent} from "./news-page/news-article/news-article.component";


const routes: Routes = [
  {path: '', component : HomeComponent , pathMatch : 'full'},
  {path: 'blogs', component : BlogsPageComponent , children : [
      {path : '' , component : BlogsMultipleComponent , pathMatch: 'full'},
      {path : 'article/:id' , component : BlogsArticleComponent}
    ]},
  {path: 'news', component : NewsPageComponent , children : [
      {path: '' , component: NewsMultipleComponent , pathMatch: 'full'},
      {path: 'article/:id', component: NewsArticleComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
