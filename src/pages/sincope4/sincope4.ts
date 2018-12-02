import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Sincope4OutputPage} from '../sincope4-output/sincope4-output'
/**
 * Generated class for the Sincope4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope4',
  templateUrl: 'sincope4.html',
})
export class Sincope4Page {

  checked:boolean[]= [false,false,false,false,false]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope4Page');
  }

  goForward(){
    console.log('goForward');
    
    var cardioOrigin = this.checked.some(item => item == true)
    this.navCtrl.push(Sincope4OutputPage, {cardioOrigin:cardioOrigin}, {animate: true, animation: "transition", duration:2000})
    
  }

}
