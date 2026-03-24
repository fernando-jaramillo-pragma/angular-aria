import { Component, input } from '@angular/core';
import { MenuSection } from '../menu/menu.model';
import { AyudaWorkspaceComponent } from './ayuda-workspace/ayuda-workspace';
import { InicioAccordionComponent } from './inicio-accordion/inicio-accordion';
import { ProductosSelectorComponent } from './productos-selector/productos-selector';
import { ServiciosTabsComponent } from './servicios-tabs/servicios-tabs';

@Component({
  selector: 'app-sections',
  imports: [
    InicioAccordionComponent,
    ProductosSelectorComponent,
    ServiciosTabsComponent,
    AyudaWorkspaceComponent,
  ],
  templateUrl: './sections.html',
  styleUrl: './sections.css',
})
export class SectionsComponent {
  currentSection = input<MenuSection>('inicio');
}
