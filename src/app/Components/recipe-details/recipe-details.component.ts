import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../Services/recipes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
}) 
export class RecipeDetailsComponent implements OnInit {
  key:string = "Object";
  constructor(private Service:RecipesService,
  private route: ActivatedRoute) { }
  ngOnInit() {
  }
}

