import { Component,OnInit} from '@angular/core';
import { Recipe } from '../recipes.module';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  //@Output() recipeWasSelected= new EventEmitter<Recipe>

  recipes: Recipe[] 
  //=[
    // new Recipe('Another Test Recipe', 'super tasty food', 'https://www.carveyourcraving.com/wp-content/uploads/2020/09/gulab-jamun-mousse-layered-dessert-500x500.jpg'),
    // new Recipe('B Test Recipe', 'super tasty food', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwJsOoh1Z-aYUZMuWhR-73DVmT8myxmUT3s8CI0sIOA&usqp=CAU&ec=48665701')
  //];
  constructor(private recipeService : RecipeService,
    private router : Router,
    private route : ActivatedRoute){}
  ngOnInit(){
    this.recipes = this.recipeService.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipeWasSelected.emit(recipe);  //passing the recipe data
  // }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
