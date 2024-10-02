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
  calculation: string = "";
  @ViewChild('operator') operator!: ElementRef;
  fractionsForm = new FormGroup({
    numerator1: new FormControl(),
    denominator1: new FormControl(),
    numerator2: new FormControl(),
    denominator2: new FormControl(),
  })

  calculate() {
    if (!this.fractionsForm.get("numerator1")?.value || !this.fractionsForm.get("numerator2")?.value || !this.fractionsForm.get("denominator1")?.value || !this.fractionsForm.get("denominator2")?.value) {
      return
    }
    this.calculation = "";
    this.showCalculation = false;
    let whole: number;
    let gcf: number;
    let mixed: string;
    // Add/Subtract
    let commonDenominator: number;
    let num1Large: number;
    let num2Large: number;
    // Multiply/Divide
    let numTotal: number;
    let denomTotal: number;

    switch (this.operator.nativeElement.value) {
      case "add":
        commonDenominator = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num1Large = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num2Large = this.fractionsForm.get("numerator2")?.value * this.fractionsForm.get("denominator1")?.value;
        let sum = num1Large + num2Large;
        whole = sum / commonDenominator;
        gcf = this.gcf(sum, commonDenominator);
        mixed = this.checkWhole(sum / gcf, commonDenominator / gcf);
        this.calculation = String(whole) + " | <sup>" + (sum / gcf) + "<\/sup>&frasl;<sub>" + (commonDenominator / gcf) + "<\/sub>" + mixed;
        this.showCalculation = true;
        break;
      case "subtract":
        commonDenominator = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num1Large = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("denominator2")?.value;
        num2Large = this.fractionsForm.get("numerator2")?.value * this.fractionsForm.get("denominator1")?.value;
        let difference = num1Large - num2Large;
        whole = difference / commonDenominator;
        gcf = this.gcf(difference, commonDenominator);
        mixed = this.checkWhole(difference / gcf, commonDenominator / gcf);
        this.calculation = String(whole) + " | <sup>" + (difference / gcf) + "<\/sup>&frasl;<sub>" + (commonDenominator / gcf) + "<\/sub>" + mixed;
        this.showCalculation = true;
        break;
      case "multiply":
        numTotal = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("numerator2")?.value;
        denomTotal = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value;
        whole = numTotal / denomTotal;
        gcf = this.gcf(numTotal, denomTotal);
        mixed = this.checkWhole(numTotal / gcf, denomTotal / gcf);
        this.calculation = String(whole) + " | <sup>" + (numTotal / gcf) + "<\/sup>&frasl;<sub>" + (denomTotal / gcf) + "<\/sub>" + mixed;
        this.showCalculation = true;
        break;
      case "divide":
        numTotal = this.fractionsForm.get("numerator1")?.value / this.fractionsForm.get("numerator2")?.value;
        denomTotal = this.fractionsForm.get("denominator1")?.value / this.fractionsForm.get("denominator2")?.value;
        whole = numTotal / denomTotal;
        gcf = this.gcf(numTotal, denomTotal);
        mixed = this.checkWhole(numTotal / gcf, denomTotal / gcf);
        this.calculation = String(whole) + " | <sup>" + (numTotal / gcf) + "<\/sup>&frasl;<sub>" + (denomTotal / gcf) + "<\/sub>" + mixed;
        this.showCalculation = true;
        break;
    }
  }

  gcf(a: number, b: number): number {
    if (b) {
      return this.gcf(b, a % b);
    } else {
      return Math.abs(a);
    }
  }

  checkWhole(num: number, denom: number): string {
    if (num > denom) {
      let whole = Math.trunc(num / denom);
      let newNum = num - (denom * whole);
      let resp = " | " + whole + "<sup>" + newNum + "<\/sup>&frasl;<sub>" + denom + "<\/sub>";
      return resp;
    }
    return "";
  }

  clear() {
    this.showCalculation = false;
    this.fractionsForm.get('numerator1')?.setValue(null);
    this.fractionsForm.get('denominator1')?.setValue(null);
    this.fractionsForm.get('numerator2')?.setValue(null);
    this.fractionsForm.get('denominator2')?.setValue(null);
  }
}
