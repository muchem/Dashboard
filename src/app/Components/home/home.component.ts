import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../Services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private Service:RecipesService) { }
    recipes;

  ngOnInit() {
    this.Service.getRecipes().subscribe(recipe =>{
      this.recipes = recipe.recipes;
    })
    
  }

}
