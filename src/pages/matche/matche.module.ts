import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchePage } from './matche';

@NgModule({
  declarations: [
    MatchePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchePage),
  ],
})
export class MatchePageModule {}
