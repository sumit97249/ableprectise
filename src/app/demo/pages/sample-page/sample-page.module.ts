import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplePageRoutingModule } from './sample-page-routing.module';
import { SamplePageComponent } from './sample-page.component';
import { SharedModule } from '../../../theme/shared/shared.module';
import {FormsModule} from '@angular/forms';
import { ApiService } from '../service/api.service';


@NgModule({
  declarations: [SamplePageComponent],
  imports: [
    CommonModule,
    SamplePageRoutingModule,
    SharedModule,
    FormsModule,
    
  ],
  providers: [ApiService]
})
export class SamplePageModule { }
