import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-combined-probability',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './combined-probability.component.html',
  styleUrl: './combined-probability.component.css'
})
export class CombinedProbabilityComponent {
  calculation: string = "";
  showCalculation: boolean = false;
  inputs: number[] = [];
  inputForm = new FormGroup({})
  setUpForm = new FormGroup({
    numberOfInputs: new FormControl()
  })

  constructor(private cdr: ChangeDetectorRef) { }

  calculateInputs() {
    this.showCalculation = false;
    this.inputs = Array.from(Array(Number(this.setUpForm.value.numberOfInputs)).keys())
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl())
    })
    this.cdr.detectChanges();
  }

  calculate() {

  }

  clear() {

  }

  updateBoxes() {
    this.cdr.detectChanges();
  }
}
