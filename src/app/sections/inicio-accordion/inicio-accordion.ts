import { Component } from '@angular/core';
import {
  AccordionContent,
  AccordionGroup,
  AccordionPanel,
  AccordionTrigger,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-inicio-accordion',
  imports: [AccordionGroup, AccordionTrigger, AccordionPanel, AccordionContent],
  templateUrl: './inicio-accordion.html',
  styleUrl: './inicio-accordion.css',
})
export class InicioAccordionComponent {}
