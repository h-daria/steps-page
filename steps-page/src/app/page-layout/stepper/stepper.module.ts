import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './stepper.component';
import { StepsComponent } from './steps/steps.component';
import { StepItemComponent } from './steps/step-item/step-item.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [StepperComponent, StepsComponent, StepItemComponent],
  exports: [StepperComponent],
})
export class StepperModule { }
