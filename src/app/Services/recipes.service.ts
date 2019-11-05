import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http:HttpClient) { }

  getRecipes():Observable<any[]>{
       return this.http.get<any[]>(`https://www.food2fork.com/api/search?key=7dc3ead401a4614c0cf8bf74c7de31a4`);
  }
}
