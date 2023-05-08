import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component ,OnDestroy,OnInit, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shooping-edit',
  templateUrl: './shooping-edit.component.html',
  styleUrls: ['./shooping-edit.component.css']
})
export class ShoopingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subcription : Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem : Ingredient;

  constructor(private slService: ShoppingListService){}
  ngOnInit(){
    this.subcription = this.slService.startedEditing
      .subscribe(
        (index: number)=>{
          this.editedItemIndex = index;
          this.editMode =true;
          this.editedItem = this.slService.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount : this.editedItem.amount
          })
        }
      )
  }

  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name , value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex, newIngredient)
    }
    else{
      this.slService.addIngredient(newIngredient);    }
  }

  ngOnDestroy(): void {
    this.subcription.unsubscribe(); //cleanup the notification
  }
}
