import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TabsComponent } from './tabs/tabs';

@Component({
  selector: 'app-root',
  template: `<app-tabs />`,
  imports: [TabsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angular-aria-pragma');
}
