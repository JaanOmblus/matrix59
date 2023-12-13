import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';

import { NgApexchartsModule } from 'ng-apexcharts';

//import { AdviceComponent } from '../matrixAdvice/matrixAdvice.component';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    NgApexchartsModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
