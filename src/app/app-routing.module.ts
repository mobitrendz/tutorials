import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentComponent } from './content/content.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
  },
  { 
    path: 'home', 
    component: HomeComponent
  },
  { 
    path: 'content/:technology', 
    component: ContentComponent
  },
  { 
    path: '**', 
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
