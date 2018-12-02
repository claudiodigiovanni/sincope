import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Sincope2OutputPage} from '../sincope2-output/sincope2-output'

/**
 * Generated class for the Sincope2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope2',
  templateUrl: 'sincope2.html',
})
export class Sincope2Page {

  checked:boolean[]=[true, false,false,false];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope2Page');
  }

  goForward(){
    console.log(this.checked);
    let param = this.checked.every(item => item == true)
    this.navCtrl.push(Sincope2OutputPage,{param:param}, {animate: true, animation: "transition", duration:2000})
  }

}
