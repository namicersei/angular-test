import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() shoppingItem = new EventEmitter<IngredientModel>();

  @ViewChild('shoppingInputName') name: ElementRef ;
  @ViewChild('shoppingInputAmount') amount: ElementRef ;

  constructor() {
  }

  ngOnInit() {
  }

  addShoppingItem() {
    this.shoppingItem.emit(new IngredientModel(this.name.nativeElement.value, this.amount.nativeElement.value));
  }

}
