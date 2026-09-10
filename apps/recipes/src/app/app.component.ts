import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

interface Page {
  readonly name: string;
  readonly href: string;
}

@Component({
  imports: [RouterModule, MatButton, MatFabButton, MatIcon],
  selector: 'recipes-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full h-full flex flex-col',
  },
})
export class AppComponent {
  protected readonly pages: Page[] = [
    { name: 'About', href: '/about' },
    { name: 'Recipes', href: '/recipes' },
    { name: 'Supplies', href: '/supplies' },
  ];
}
