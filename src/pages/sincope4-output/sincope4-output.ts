import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardioOriginPage} from '../cardio-origin/cardio-origin'
import {NoCardioOriginPage} from '../no-cardio-origin/no-cardio-origin'

/**
 * Generated class for the Sincope4OutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope4-output',
  templateUrl: 'sincope4-output.html',
})
export class Sincope4OutputPage {

  cardioOrigin:boolean

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope4OutputPage');
    this.cardioOrigin = this.navParams.get("cardioOrigin")
    console.log( this.cardioOrigin);
    
  }

  goForward(){
    
    if (this.cardioOrigin)
      this.navCtrl.push(CardioOriginPage, null, {animate: true, animation: "transition", duration:2000})
    else
      this.navCtrl.push(NoCardioOriginPage, null, {animate: true, animation: "transition", duration:2000})
  }

}
