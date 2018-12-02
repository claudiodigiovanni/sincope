import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EndPage} from '../end/end'

/**
 * Generated class for the CardioOriginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cardio-origin',
  templateUrl: 'cardio-origin.html',
})
export class CardioOriginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardioOriginPage');
  }

  goForward(){
    this.navCtrl.push(EndPage,null, {animate: true, animation: "transition", duration:2000})
  }

}
