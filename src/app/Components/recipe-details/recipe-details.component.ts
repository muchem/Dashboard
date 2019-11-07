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
  constructor(private Service:RecipesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
      this.Id = params.get('recipeId');
        this.Service.getSelectedRecipe(this.Id).subscribe(selected =>{
          this.selectedRecipe = selected;
          console.log(this.selectedRecipe);
        })
    })
  }
}
