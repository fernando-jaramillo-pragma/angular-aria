import { Component } from '@angular/core';
import { Tab, TabContent, TabList, TabPanel, Tabs } from '@angular/aria/tabs';

@Component({
  selector: 'app-servicios-tabs',
  imports: [Tabs, TabList, Tab, TabPanel, TabContent],
  templateUrl: './servicios-tabs.html',
  styleUrl: './servicios-tabs.css',
})
export class ServiciosTabsComponent {}
