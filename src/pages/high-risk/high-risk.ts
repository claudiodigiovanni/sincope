import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HighRiskOutputPage} from '../high-risk-output/high-risk-output'

/**
 * Generated class for the HighRiskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-high-risk',
  templateUrl: 'high-risk.html',
})
export class HighRiskPage {

  checked:boolean[] = [false,false,false,false]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HighRiskPage');
  }

  goForward(){

    console.log('test...');
    this.navCtrl.push(HighRiskOutputPage, null, {animate: true, animation: "transition", duration:2000})
    
  }

}
