import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MenuComponent } from './menu/menu';
import { MenuSection } from './menu/menu.model';
import { SectionsComponent } from './sections/sections';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-layout" role="main" aria-label="Contenido principal de la aplicación">
      <header class="app-header" role="banner" aria-label="Encabezado de la aplicación">
        <h1>Angular Aria - Demo de Menú</h1>
        <p>Menú de barra básico con 4 opciones y navegación por teclado usando Angular Aria.</p>
      </header>

      <app-menu [currentSection]="currentSection()" (sectionChange)="onSectionChange($event)" />

      <app-sections [currentSection]="currentSection()" />
    </div>
  `,
  imports: [MenuComponent, SectionsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('angular-aria-pragma');
  protected readonly currentSection = signal<MenuSection>('inicio');

  protected onSectionChange(section: MenuSection) {
    this.currentSection.set(section);
  }
}
