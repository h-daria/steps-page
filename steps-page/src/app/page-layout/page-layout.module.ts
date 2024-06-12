import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { StepperModule } from './stepper/stepper.module';

@NgModule({
  imports: [
    CommonModule,
    PageLayoutRoutingModule,

    StepperModule,
  ],
  declarations: [PageLayoutComponent]
})
export class PageLayoutModule { }
