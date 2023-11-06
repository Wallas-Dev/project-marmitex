import { Component } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent {
  foodList: Food[] = [new Food('Carne', 1), new Food('Arroz', 2), new Food('Couve', 2)]
  
}
