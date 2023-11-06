import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Food } from 'src/app/shared/food.model';

@Component({
  selector: 'app-edit-food',
  templateUrl: './edit-food.component.html',
  styleUrls: ['./edit-food.component.css']
})
export class EditFoodComponent {
  @Input() foodList: Food[] = []
  nameFood = ""
  amount = null

  addFood(form: NgForm){
    console.log(form.value.name);
    console.log(form.value.amount);
    this.foodList.push(new Food(form.value.name, form.value.amount))
    form.resetForm()
    
  }
}
