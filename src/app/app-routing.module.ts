import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from "./components/posts/posts.component";
import { ApiComponent } from "./components/api/api.component";
import { TodoComponent } from "./components/todo/todo.component";
import { HomeComponent } from "./components/home/home.component";
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { SingleComponent } from "./components/single/single.component";

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'api',
    component:ApiComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'rick-and-morty',
    component:RickAndMortyComponent
  },
  {
    path:'single-char/:id',
    component:SingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
