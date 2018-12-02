import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Sincope3Page} from '../sincope3/sincope3'
import {EndPage} from '../end/end'

/**
 * Generated class for the Sincope2OutputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope2-output',
  templateUrl: 'sincope2-output.html',
})
export class Sincope2OutputPage {

  diagnosis:any='true'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope2OutputPage');
    
  }

  goForward(){
    if (this.diagnosis && this.diagnosis == 'false' )
      this.navCtrl.push(Sincope3Page, {animate: true, animation: "transition", duration:2000})
    else
    this.navCtrl.push(EndPage, {animate: true, animation: "transition", duration:2000})
  }

}
