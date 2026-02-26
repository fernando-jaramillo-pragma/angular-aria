import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  activeTab = signal(0);

  selectTab(index: number) {
    this.activeTab.set(index);
  }
}
