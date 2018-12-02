import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../about/about'
import {Sincope1Page} from '../sincope1/sincope1'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
   
  }

  goForward(){
    this.navCtrl.push(Sincope1Page,null, {animate: true, animation: "transition", duration:2000})
  }

  onSwipe(e){
   
    this.navCtrl.push(Sincope1Page,null, {animate: true, animation: "transition", duration:2000})
    
  }



}
