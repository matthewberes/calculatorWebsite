import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quadratic',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './quadratic.component.html',
  styleUrl: './quadratic.component.css'
})
export class QuadraticComponent {
  inputForm = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
    c: new FormControl()
  })
  aInput: string = "";
  bInput: string = "";
  cInput: string = "";
  calculation: string = "";
  showCalculation: boolean = false;

  calculate() {
    this.calculation = "";
    this.showCalculation = false;

    let x1: number = ((- this.inputForm.get('b')?.value + Math.sqrt(Math.pow(this.inputForm.get('b')?.value, 2) - (4 * this.inputForm.get('a')?.value * this.inputForm.get('c')?.value))) / (2 * this.inputForm.get('a')?.value));
    let x2: number = ((- this.inputForm.get('b')?.value - Math.sqrt(Math.pow(this.inputForm.get('b')?.value, 2) - (4 * this.inputForm.get('a')?.value * this.inputForm.get('c')?.value))) / (2 * this.inputForm.get('a')?.value));

    this.calculation = String("x=" + x1 + " and x=" + x2)
    this.showCalculation = true;

  }

  clear() {
    this.showCalculation = false;
    this.inputForm.get('a')?.setValue(null);
    this.inputForm.get('b')?.setValue(null);
    this.inputForm.get('c')?.setValue(null);
  }

  change(box: string, event: Event) {
    switch (box) {
      case "a":
        this.aInput = String(this.inputForm.get('a')?.value);
        break;
      case "b":
        this.bInput = String(this.inputForm.get('b')?.value);
        break;
      case "c":
        this.cInput = String(this.inputForm.get('c')?.value);
        break;
    }
  }
}
