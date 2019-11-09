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
          console.log(this.selectedRecipe);
        })
    })
  }
  add(){
    this.show = !this.show;
    this.hide = !this.hide;
    localStorage.setItem(this.key, JSON.stringify(this.selectedRecipe));
  }
  remove(){
    this.show = !this.show;
    this.hide = !this.hide;
    localStorage.removeItem(this.key);
  }
}

