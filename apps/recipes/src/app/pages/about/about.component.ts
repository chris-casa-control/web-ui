import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'recipes-about',
  imports: [],
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col',
  },
})
export class AboutComponent {}
