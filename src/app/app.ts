import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Tabs } from './tabs/tabs';

@Component({
  selector: 'app-root',
  template: `<app-tabs />`,
  imports: [Tabs],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angular-aria-pragma');
}
