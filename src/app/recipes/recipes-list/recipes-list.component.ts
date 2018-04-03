import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[] = [
    new RecipeModel('Test Name', 'Test Desc', 'http://via.placeholder.com/350x150'),
    new RecipeModel('Test Name 2', 'Test Desc 2', 'http://via.placeholder.com/350x150')
  ];

  @Output() clickListItem = new EventEmitter<RecipeModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onItemSelected(recipe: RecipeModel){
    this.clickListItem.emit(recipe);
  }

}
