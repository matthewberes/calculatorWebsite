import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fractions',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './fractions.component.html',
  styleUrl: './fractions.component.css'
})
export class FractionsComponent {
  showCalculation: boolean = false;
  calculation: string = ""
  @ViewChild('operator') operator!: ElementRef;
  fractionsForm = new FormGroup({
    numerator1: new FormControl(),
    denominator1: new FormControl(),
    numerator2: new FormControl(),
    denominator2: new FormControl(),
  })

  calculate() {
    this.calculation = "";
    this.showCalculation = false;
    // Add/Subtract
    let commonDenominator: number;
    let num1Large: number;
    let num2Large: number;
    // Multiply/Divide
    let numTotal: number;
    let denomTotal: number;
    let whole: number;
    switch (this.operator.nativeElement.value) {
      case "add":
        commonDenominator = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value
        num1Large = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num2Large = this.fractionsForm.get("numerator2")?.value * this.fractionsForm.get("denominator1")?.value;
        whole = (num1Large + num2Large) / commonDenominator;
        this.calculation = String(whole) + " | " + (num1Large + num2Large) + " / " + commonDenominator
        this.showCalculation = true;
        break;
      case "subtract":
        commonDenominator = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value
        num1Large = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num2Large = this.fractionsForm.get("numerator2")?.value * this.fractionsForm.get("denominator1")?.value;
        whole = (num1Large - num2Large) / commonDenominator;
        this.calculation = String(whole) + " | " + (num1Large - num2Large) + " / " + commonDenominator
        this.showCalculation = true;
        break;
      case "multiply":
        numTotal = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("numerator2")?.value;
        denomTotal = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value;
        whole = numTotal / denomTotal;
        this.calculation = String(whole) + " | " + numTotal + " / " + denomTotal
        this.showCalculation = true;
        break;
      case "divide":
        numTotal = this.fractionsForm.get("numerator1")?.value / this.fractionsForm.get("numerator2")?.value;
        denomTotal = this.fractionsForm.get("denominator1")?.value / this.fractionsForm.get("denominator2")?.value;
        whole = numTotal / denomTotal;
        this.calculation = String(whole) + " | " + numTotal + " / " + denomTotal
        this.showCalculation = true;
        break;
    }
  }
}
