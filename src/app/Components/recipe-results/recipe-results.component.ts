import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/Services/recipes.service';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss']
})
export class RecipeResultsComponent implements OnInit {
  constructor(private route:ActivatedRoute,
    private Service:RecipesService) { }

  ngOnInit() {

  }
}
