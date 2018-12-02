import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {Sincope1Page} from '../pages/sincope1/sincope1'
import {Sincope2Page} from '../pages/sincope2/sincope2'
import {Sincope3Page} from '../pages/sincope3/sincope3'
import {Sincope4Page} from '../pages/sincope4/sincope4'
import {Sincope1OutputPage} from '../pages/sincope1-output/sincope1-output'
import {Sincope2OutputPage} from '../pages/sincope2-output/sincope2-output'
import {Sincope3OutputPage} from '../pages/sincope3-output/sincope3-output'
import {Sincope4OutputPage} from '../pages/sincope4-output/sincope4-output'

import {CardioOriginPage} from '../pages/cardio-origin/cardio-origin'
import {NoCardioOriginPage} from '../pages/no-cardio-origin/no-cardio-origin'

import {NoCardioOriginOutputPage} from '../pages/no-cardio-origin-output/no-cardio-origin-output'

import {HighRiskPage} from '../pages/high-risk/high-risk'
import {HighRiskOutputPage} from '../pages/high-risk-output/high-risk-output'

import {EndPage} from '../pages/end/end'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Sincope1Page,
    Sincope1OutputPage,
    Sincope2Page,
    Sincope2OutputPage,
    Sincope3Page,
    Sincope3OutputPage,
    Sincope4Page,
    Sincope4OutputPage,
    CardioOriginPage,
    NoCardioOriginPage,
    EndPage,
    HighRiskPage,
    HighRiskOutputPage,
    NoCardioOriginOutputPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Sincope1Page,
    Sincope1OutputPage,
    Sincope2Page,
    Sincope2OutputPage,
    Sincope3Page,
    Sincope3OutputPage,
    Sincope4Page,
    Sincope4OutputPage,
    CardioOriginPage,
    NoCardioOriginPage,
    EndPage,
    HighRiskPage,
    HighRiskOutputPage,
    NoCardioOriginOutputPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
