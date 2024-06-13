import { Component } from '@angular/core';
import { stepper1, stepper2 } from '../../../assets/data';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {
steppersList = [stepper1, stepper2];
}
