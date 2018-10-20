import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HistoricalWeekPage } from './historical-week';

@NgModule({
  declarations: [
    HistoricalWeekPage,
  ],
  imports: [
    IonicPageModule.forChild(HistoricalWeekPage),
  ],
})
export class HistoricalWeekPageModule {}
