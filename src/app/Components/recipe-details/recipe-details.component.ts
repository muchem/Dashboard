import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../Services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
}) 
export class RecipeDetailsComponent implements OnInit {
  Id;
  selectedRecipe;
  Ingredients;
  Favorites;
  store;
  key:string = "Object";
  show:boolean = true;
  hide:boolean = false;
  constructor(private Service:RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.Id = params.get('recipeId');
        this.Service.getSelectedRecipe(this.Id).subscribe(selected =>{
          this.selectedRecipe = selected;
          this.Ingredients = selected.recipe.ingredients;
        })
    }) 
    //localStorage.setItem('Favorites', JSON.stringify(this.Favorites));
   // this.store = JSON.parse(localStorage.getItem('Favorites'));
  }
  add(){
    this.show = !this.show;
    this.hide = !this.hide;
   //this.store.push(this.selectedRecipe.recipe);
    console.log(this.selectedRecipe.recipe);
  }
  remove(){
    this.show = !this.show;
    this.hide = !this.hide;
  }
}
/* 
Favorites.push(this.selectedRecipe);
localStorage.setItem('Favorites', JSON.stringify(this.Favorites));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
*/
