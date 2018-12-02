import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EndPage} from '../end/end'
import {NoCardioOriginOutputPage} from '../no-cardio-origin-output/no-cardio-origin-output'

/**
 * Generated class for the NoCardioOriginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-no-cardio-origin',
  templateUrl: 'no-cardio-origin.html',
})
export class NoCardioOriginPage {

  checked:boolean[] = [false,false,false]
  diagnosis:any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoCardioOriginPage');
  }
  goForward(){
    console.log(typeof this.diagnosis);
    this.navCtrl.push(NoCardioOriginOutputPage,null, {animate: true, animation: "transition", duration:2000}) 
    
  }

}
