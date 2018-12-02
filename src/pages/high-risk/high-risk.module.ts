import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HighRiskPage } from './high-risk';

@NgModule({
  declarations: [
    HighRiskPage,
  ],
  imports: [
    IonicPageModule.forChild(HighRiskPage),
  ],
})
export class HighRiskPageModule {}
