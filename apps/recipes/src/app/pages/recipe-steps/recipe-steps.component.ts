import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'recipes-recipe-steps',
  imports: [],
  templateUrl: './recipe-steps.component.html',
  styleUrl: './recipe-steps.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecipeStepsComponent {}
