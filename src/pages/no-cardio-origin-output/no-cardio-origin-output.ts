import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EndPage} from '../end/end'
import {CardioOriginPage} from '../cardio-origin/cardio-origin'

/**
 * Generated class for the NoCardioOriginOutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-no-cardio-origin-output',
  templateUrl: 'no-cardio-origin-output.html',
})
export class NoCardioOriginOutputPage {

  diagnosis:any
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoCardioOriginOutputPage');
  }

  goForward(){
    console.log(typeof this.diagnosis);
   if (this.diagnosis == 'true')
      this.navCtrl.push(EndPage,null, {animate: true, animation: "transition", duration:2000})
    else
      this.navCtrl.push(CardioOriginPage,null, {animate: true, animation: "transition", duration:2000}) 
    
  }

}
