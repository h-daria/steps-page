import { Component, Input, OnInit } from '@angular/core';
import { StepInfo } from './step-item/step-item.component';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {
@Input() steps!: StepInfo[];

  ngOnInit() {
    console.log(this.steps);
  }

  onChangeStep(index: number) {
    for (let i = 0; i < this.steps.length; i++) {
      if (i !== index && i >= 0 && i < index && !this.steps[i].isFinished) {
        this.steps[i].isFinished = true;
      }

      if (i === index && this.steps[i].isFinished) {
        this.steps[i].isFinished = false;
        this.steps[i].isActive = true;
        this.steps.forEach((step, stepIndex) => {
          if (stepIndex > i) {
            this.steps[stepIndex].isActive = false;
            this.steps[stepIndex].isFinished = false;
          }
        })
      }

      if (i === index) {
        this.steps[i].isActive = true;
      }
    }
  }
}
