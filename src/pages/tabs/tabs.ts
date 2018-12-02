import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import {Sincope4Page} from '../sincope4/sincope4'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  //tab1Root = Sincope4Page
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
