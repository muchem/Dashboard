import { NgModule } from '@angular/core';
import { ResultComponent } from './Components/result/result.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { FavortiesComponent } from './Components/favorties/favorties.component';
import { EconomyComponent } from './Components/economy/economy.component';


const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'favorites',component:FavortiesComponent },
  { path:'result/:companySymbol/:companyName',component: ResultComponent},
  { path:'economy',component:EconomyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 