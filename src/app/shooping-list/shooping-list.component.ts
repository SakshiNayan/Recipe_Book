import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit,OnDestroy{
  ingredients : Ingredient[];
  private idChangeSub : Subscription;
  // = [
  //   new Ingredient('Apples',5),
  //   new Ingredient('Potato',10)
  // ];
  constructor(
    private slService : ShoppingListService
  ){}
  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.idChangeSub =  this.slService.ingredientsChanged
    .subscribe(
      (ingredients : Ingredient[])=>{
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  // onIngredientAdded(ingredient : Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
