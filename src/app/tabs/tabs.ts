import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type TabsType = 'overview' | 'members' | 'billing';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.html',
  styleUrl: './tabs.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  protected activeTab = signal<TabsType>('overview');
  protected readonly tabs: readonly TabsType[] = ['overview', 'members', 'billing'] as const;
  protected readonly focusedTabIndex = signal(0);

  protected handleTabListKeyDown(event: KeyboardEvent) {
    const { key } = event;
    switch (key) {
      case 'ArrowRight':
        event.preventDefault();
        this.focusNextTab();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.focusPreviousTab();
        break;
      case 'Home':
        event.preventDefault();
        this.focusFirstTab();
        break;
      case 'End':
        event.preventDefault();
        this.focusLastTab();
        break;
      default:
        break;
    }
  }

  protected handleTabKeyDown(event: KeyboardEvent, tabId: TabsType) {
    const { key } = event;

    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.activateTab(tabId);
    }
  }

  protected activateTab(tabId: TabsType) {
    this.activeTab.set(tabId);
  }

  private focusNextTab() {
    const currentIndex = this.focusedTabIndex();
    const nextIndex = currentIndex < this.tabs.length - 1 ? currentIndex + 1 : 0;
    this.focusTabByIndex(nextIndex);
  }

  private focusPreviousTab() {
    const currentIndex = this.focusedTabIndex();
    const previousIndex = currentIndex > 0 ? currentIndex - 1 : this.tabs.length - 1;
    this.focusTabByIndex(previousIndex);
  }

  private focusFirstTab() {
    this.focusTabByIndex(0);
  }

  private focusLastTab() {
    this.focusTabByIndex(this.tabs.length - 1);
  }

  private focusTabByIndex(index: number) {
    this.focusedTabIndex.set(index);
    const tabId = this.tabs[index];
    if (tabId) {
      const tabElement = document.getElementById(`${tabId}-tab`);
      if (tabElement) {
        tabElement.focus();
      }
    }
  }
}
