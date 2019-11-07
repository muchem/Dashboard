import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from 'src/app/Services/recipes.service';

@Component({
  selector: 'app-recipe-results',
  templateUrl: './recipe-results.component.html',
  styleUrls: ['./recipe-results.component.scss']
})
export class RecipeResultsComponent implements OnInit {
  search:string;
  Results;
  constructor(private route:ActivatedRoute,
    private Service:RecipesService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params =>{
        this.search = params.get('searchString');

        this.Service.searchrecipes(this.search).subscribe(result =>{
            this.Results = result.recipes;
        })

    })

  }

}
