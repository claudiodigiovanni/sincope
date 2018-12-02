import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Sincope1OutputPage} from '../sincope1-output/sincope1-output'

/**
 * Generated class for the Sincope1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope1',
  templateUrl: 'sincope1.html',
})
export class Sincope1Page {

  checked:any[] = [true,false,false,false,false,false]

  sincope= false

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope1Page');
  }

  goForward(){
    console.log(this.checked);

    let param = this.checked.every(item => item == true)
    
    this.navCtrl.push(Sincope1OutputPage,{param:param}, {animate: true, animation: "transition", duration:2000})
  }

}
