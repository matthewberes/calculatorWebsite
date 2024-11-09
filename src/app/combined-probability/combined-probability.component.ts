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
  inputForm = new FormGroup({});
  setUpForm = new FormGroup({
    numberOfInputs: new FormControl()
  })
  totalInputs: number = 0;
  inputOptions: string[] = [];
  clearPlacement: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  calculateInputs() {
    this.showCalculation = false;
    this.totalInputs = Number(this.setUpForm.value.numberOfInputs);
    this.inputs = Array.from(Array(this.totalInputs).keys());
    let i: number = 0;
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl());
      this.inputForm.addControl(String(x) + "Numerator", new FormControl());
      this.inputForm.addControl(String(x) + "Denominator", new FormControl());
      this.inputOptions[i] = "percentage";
      i++;
    })
    this.clearPlacement = this.setUpForm.get('numberOfInputs')?.value;
    this.cdr.detectChanges();
  }

  calculate() {
    this.showCalculation = false;
    let sum: number = 1;
    for (let i = 0; i < this.totalInputs; i++) {
      if (this.inputOptions[i] == "percentage") {
        sum = sum * (this.inputForm.get(String(i))?.value / 100);
      } else if (this.inputOptions[i] == "fraction") {
        sum = sum * (this.inputForm.get(String(i) + "Numerator")?.value / this.inputForm.get(String(i) + "Denominator")?.value);
      } else if (this.inputOptions[i] == "decimal") {
        sum = sum * this.inputForm.get(String(i))?.value;
      }
    }
    let fraction = this.buildFraction(sum);
    this.calculation = String(sum) + " | " + fraction;
    this.showCalculation = true;
  }

  buildFraction(num: number): string {
    let decimalPoints = String(num).split(".");
    let mulitplier = "1";
    for (let i = 0; i < decimalPoints[1].length; i++) {
      mulitplier += "0";
    }
    let numerator = num * Number(mulitplier);
    let gcf = this.gcf(numerator, Number(mulitplier));
    return "<sup>" + String(numerator / gcf) + "<\/sup>&frasl;<sub>" + String(Number(mulitplier) / gcf) + "<\/sub>";
  }

  gcf(a: number, b: number): number {
    if (b) {
      return this.gcf(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  clear() {
    for (let i = 0; i < this.totalInputs; i++) {
      this.inputForm.get(String(i))?.setValue(null);
      this.inputForm.get(String(i) + "Numerator")?.setValue(null);
      this.inputForm.get(String(i) + "Denominator")?.setValue(null);
    }
  }

  updateBoxes(num: number, val: any) {
    this.inputOptions[num] = val;
    this.cdr.detectChanges();
  }
}
