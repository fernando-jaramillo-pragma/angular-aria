import { Component } from '@angular/core';
import { Tabs, Tab, TabPanel, TabList, TabContent } from '@angular/aria/tabs';

@Component({
  selector: 'app-tabs',
  imports: [Tabs, TabList, Tab, TabPanel, TabContent],
  templateUrl: './tabs.html',
  styleUrls: ['./tabs.css'],
})
export class TabsComponent {}
