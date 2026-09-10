import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'recipes-recipe-list',
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeListComponent {}
