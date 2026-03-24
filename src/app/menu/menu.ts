import { Component, input, output } from '@angular/core';
import { MenuBar, MenuItem } from '@angular/aria/menu';
import { MenuSection } from './menu.model';

@Component({
  selector: 'app-menu',
  imports: [MenuBar, MenuItem],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class MenuComponent {
  currentSection = input<MenuSection>('inicio');
  sectionChange = output<MenuSection>();

  private readonly validSections: MenuSection[] = ['inicio', 'productos', 'servicios', 'ayuda'];

  onMenuSelect(section: MenuSection) {
    this.sectionChange.emit(section);
  }

  onMenuBarSelect(value: string) {
    if (this.validSections.includes(value as MenuSection)) {
      this.onMenuSelect(value as MenuSection);
    }
  }
}
