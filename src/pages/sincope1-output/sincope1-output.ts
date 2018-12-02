import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Sincope2Page} from '../sincope2/sincope2'
import {HomePage} from '../home/home'

/**
 * Generated class for the Sincope1OutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope1-output',
  templateUrl: 'sincope1-output.html',
})
export class Sincope1OutputPage {

  sincope:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope1OutputPage');
    this.sincope = this.navParams.get('param')
  }

  goForward(){
    if (this.sincope)
      this.navCtrl.push(Sincope2Page, {animate: true, animation: "transition", duration:2000})
    else
      
      this.navCtrl.setRoot(HomePage, {animate: true, animation: "transition", duration:2000})
  }

}
