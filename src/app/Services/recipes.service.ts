import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  string;
  Id;
  constructor(private http:HttpClient) { }

  getRecipes():Observable<any[]>{
       return this.http.get<any[]>(`https://www.food2fork.com/api/search?key=7dc3ead401a4614c0cf8bf74c7de31a4`);
  }
  searchrecipes(searchValue):Observable<any[]>{
    let Search =  new HttpParams().set('q',searchValue);
    this.string = { params:searchValue }
    console.log(this.string.params);
    return this.http.get<any[]>(`https://www.food2fork.com/api/search?key=7dc3ead401a4614c0cf8bf74c7de31a4&q=${this.string.params}&page=1`);
  }
  getSelectedRecipe(recipeId):Observable<any[]>{
    let selected = new HttpParams().set('Id',recipeId);
    this.Id = { params:recipeId }
    return this.http.get<any[]>(`https://www.food2fork.com/api/get?key=7dc3ead401a4614c0cf8bf74c7de31a4&rId=${this.Id.params}`);
  }
}
