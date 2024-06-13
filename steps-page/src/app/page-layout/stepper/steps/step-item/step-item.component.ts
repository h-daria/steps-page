import { Component, Input } from '@angular/core';

export interface StepInfo {
  label: string;
  count: number;
  isActive: boolean;
  isFinished: boolean;
}

@Component({
  selector: 'app-step-item',
  templateUrl: './step-item.component.html',
  styleUrls: ['./step-item.component.scss']
})
export class StepItemComponent {
@Input() step!: StepInfo;
}
