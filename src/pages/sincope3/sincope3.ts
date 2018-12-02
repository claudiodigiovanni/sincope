import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {Sincope3OutputPage} from '../sincope3-output/sincope3-output'

/**
 * Generated class for the Sincope3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sincope3',
  templateUrl: 'sincope3.html',
})
export class Sincope3Page {

  checkedTest1:boolean[]=[false,false,false,false]
  checkedTest2:boolean[] =[false,false,false,false,false,false]

  valueTest1=0
  valueTest2=0

  selectedTest=1

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Sincope3Page');
  }

  goForward(){

    console.log('test...');
    
    let value = 0
    if (this.selectedTest == 1)
      value = this.valueTest1
    else
      value = this.valueTest2
        
    this.navCtrl.push(Sincope3OutputPage, {value:value, test:this.selectedTest}, {animate: true, animation: "transition", duration:2000})
    
  }

  setTest(index){
    this.selectedTest = index
  }

  setValueTest1(index,value){

    if (this.checkedTest1[index])
      this.valueTest1 += value
    else
      this.valueTest1 -= value

    console.log(this.valueTest1);
    
  }

  setValueTest2(index,value){

    if (this.checkedTest2[index])
      this.valueTest2 += value
    else
      this.valueTest2 -= value

    console.log(this.valueTest2);
    
  }

}
