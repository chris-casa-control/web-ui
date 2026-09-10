import { Route } from '@angular/router';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';
import { RecipeNewComponent } from './pages/recipe-new/recipe-new.component';
import { RecipeStepsComponent } from './pages/recipe-steps/recipe-steps.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const appRoutes: Route[] = [
  {
    path: 'recipes',
    component: RecipeListComponent,
    title: 'Recipes',
  },
  {
    path: 'recipe-details',
    component: RecipeDetailsComponent,
  },
  {
    path: 'recipe-new',
    component: RecipeNewComponent,
  },
  {
    path: 'recipe-steps/:recipe-id',
    component: RecipeStepsComponent,
  },
  {
    path: 'supplies',
    component: SuppliesComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
];
