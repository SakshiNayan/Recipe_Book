import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoopingListComponent } from './shooping-list/shooping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  {path: '', redirectTo:'/recipes', pathMatch:'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path : '', component : RecipeStartComponent},
    {path: 'new', component : RecipeEditComponent},
    {path : ':id' , component : RecipeDetailsComponent} ,  //id is a dynamic parameter
    {path: ':id/edit', component : RecipeEditComponent}
  ]},
  {path: 'shopping-list', component: ShoopingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
