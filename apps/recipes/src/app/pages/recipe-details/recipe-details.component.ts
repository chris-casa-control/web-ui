import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'recipes-recipe-details',
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeDetailsComponent {}
