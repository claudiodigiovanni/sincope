import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Sincope4Page} from '../sincope4/sincope4'

import {HighRiskPage} from '../high-risk/high-risk'

import {HomePage} from '../home/home'

/**
 * Generated class for the Sincope3OutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope3-output',
  templateUrl: 'sincope3-output.html',
})
export class Sincope3OutputPage {

  test:number;
  value:number;

  episodioUnico:any;

  testName = ['OESIL RISK SCORE','EGSYS RISK SCORE']

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope3OutputPage:' + this.navParams);

    this.value = +this.navParams.get("value")
    this.test = +this.navParams.get("test")
    
  }

  goForward(){

    console.log('test...');

    if (this.test == 1 && this.value >= 2 || this.test == 2 && this.value >= 3 ){
      this.navCtrl.push(HighRiskPage, null, {animate: true, animation: "transition", duration:2000})
    }
    else if (this.episodioUnico && this.episodioUnico == 'true')
      this.navCtrl.setRoot(HomePage, null, {animate: true, animation: "transition", duration:2000})
    else
      this.navCtrl.push(Sincope4Page, null, {animate: true, animation: "transition", duration:2000})
    
  }

}
