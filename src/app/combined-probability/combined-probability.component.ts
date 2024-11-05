import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
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
  inputOptions: string[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  calculateInputs() {
    this.showCalculation = false;
    this.inputs = Array.from(Array(Number(this.setUpForm.value.numberOfInputs)).keys())
    let i: number = 0;
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl())
      this.inputForm.addControl(String(x) + "Numerator", new FormControl())
      this.inputForm.addControl(String(x) + "Denominator", new FormControl())
      this.inputOptions[i] = "percentage"
      i++;
    })
    this.cdr.detectChanges();
  }

  calculate() {
    console.log(this.inputForm)
  }

  clear() {

  }

  updateBoxes(num: number, val: any) {
    console.log(val.value)
    this.cdr.detectChanges();
  }
}
