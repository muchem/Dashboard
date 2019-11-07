import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FavortiesComponent } from './Components/favorties/favorties.component';
import { RecipeResultsComponent } from './Components/recipe-results/recipe-results.component';
import { RecipeDetailsComponent } from './Components/recipe-details/recipe-details.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'favorites',component:FavortiesComponent },
  { path:'recipe-results/:searchString',component:RecipeResultsComponent },
  { path:'recipe/:recipeId',component:RecipeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 