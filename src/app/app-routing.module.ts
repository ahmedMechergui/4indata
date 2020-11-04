import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BlogsPageComponent} from "./blogs-page/blogs-page.component";
import {BlogsArticleComponent} from "./blogs-page/blogs-article/blogs-article.component";
import {BlogsMultipleComponent} from "./blogs-page/blogs-multiple/blogs-multiple.component";


const routes: Routes = [
  {path: '', component : HomeComponent , pathMatch : 'full'},
  {path: 'blogs', component : BlogsPageComponent , children : [
      {path : '' , component : BlogsMultipleComponent , pathMatch: 'full'},
      {path : 'article/:id' , component : BlogsArticleComponent}
    ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
