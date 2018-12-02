import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {EndPage} from '../end/end'
import {CardioOriginPage} from '../cardio-origin/cardio-origin'

/**
 * Generated class for the HighRiskOutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-high-risk-output',
  templateUrl: 'high-risk-output.html',
})
export class HighRiskOutputPage {

  diagnosis:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighRiskOutputPage');
  }

  goForward(){

    console.log('test...');

    if (this.diagnosis && this.diagnosis == 'true')
      this.navCtrl.push(EndPage, null, {animate: true, animation: "transition", duration:2000})
    else
      this.navCtrl.push(CardioOriginPage, null, {animate: true, animation: "transition", duration:2000})
    
  }

}
