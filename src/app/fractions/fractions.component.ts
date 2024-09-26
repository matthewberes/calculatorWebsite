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
    this.showCalculation = false;
    switch (this.operator.nativeElement.value) {
      case "add":
        let commonDenominator = this.fractionsForm.get("denominator1")?.value * this.fractionsForm.get("denominator2")?.value
        let num1Large = this.fractionsForm.get("numerator1")?.value * this.fractionsForm.get("denominator2")?.value;
        let num2Large = this.fractionsForm.get("numerator2")?.value * this.fractionsForm.get("denominator1")?.value;
        let whole = (num1Large + num2Large) / commonDenominator;
        this.calculation = String(whole) + " | " + (num1Large + num2Large) + " / " + commonDenominator
        this.showCalculation = true;
        break;
      case "subtract":
        break;
      case "multiply":
        break;
      case "divide":
        break;
    }
  }
}
