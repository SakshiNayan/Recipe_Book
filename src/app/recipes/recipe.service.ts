import { Injectable } from "@angular/core";
import { Recipe } from "./recipes.module";
import { Ingredient } from "../shared/ingredient.module";
import { ShoppingListService } from "../shooping-list/shopping-list.service";
//import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    //recipeSelected =new Subject<Recipe>();
    //private bcz we can't directly access this array from outside
    private recipes: Recipe[] =[
        new Recipe(
            'Another Test Recipe',
            'Super-chrunch!',
            'https://www.carveyourcraving.com/wp-content/uploads/2020/09/gulab-jamun-mousse-layered-dessert-500x500.jpg',
            [
                new Ingredient('Meat',1),
                new Ingredient('Veggies',5)
            ]),
        new Recipe(
            'B Test Recipe',
            'What else do you need?',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVwJsOoh1Z-aYUZMuWhR-73DVmT8myxmUT3s8CI0sIOA&usqp=CAU&ec=48665701',
            [
                new Ingredient('Bun',8),
                new Ingredient('Milk shake',20)
            ])
      ];

    constructor(private slService: ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice(); //this will simply return new array which is an exact copy of the one in this service file.
    }
    
    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientToShopList(ingredients : Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}