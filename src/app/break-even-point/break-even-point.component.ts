import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-break-even-point',
  standalone: true,
  imports: [NgIf],
  templateUrl: './break-even-point.component.html',
  styleUrl: './break-even-point.component.css'
})
export class BreakEvenPointComponent {
  calculation: string = "";
  showCalculation: boolean = false;

  calculate() {

  }

  clear() {

  }
}
