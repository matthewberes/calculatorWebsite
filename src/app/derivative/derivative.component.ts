import { NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-derivative',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './derivative.component.html',
  styleUrl: './derivative.component.css'
})
export class DerivativeComponent {
  calculation: string = "";
  showCalculation: boolean = false;
  currRule: string = "constant";
  @ViewChild('rule') rule!: ElementRef;

  constantForm = new FormGroup({
    c: new FormControl()
  });
  constantC: string = "";

  powerForm = new FormGroup({
    n: new FormControl(),
    m: new FormControl()
  });
  powerN: string = "";
  powerM: string = "";

  selectChange() {
    this.currRule = this.rule.nativeElement.value;
    this.showCalculation = false;
    this.clear();
  }

  change(box: string, event: Event) {
    switch (box) {
      case "constantC":
        if (!this.constantForm.get('c')?.value) {
          this.constantC = "";
        } else {
          this.constantC = String(this.constantForm.get('c')?.value);
        }
        break;
      case "powerN":
        if (!this.powerForm.get('n')?.value) {
          this.powerN = "";
        } else {
          this.powerN = String(this.powerForm.get('n')?.value);
        }
        break;
      case "powerM":
        if (!this.powerForm.get('m')?.value) {
          this.powerM = "";
        } else {
          this.powerM = String(this.powerForm.get('m')?.value);
        }
        break;
    }
  }

  calculate() {
    this.showCalculation = false;
    switch (this.currRule) {
      case "constant":
        this.calculation = String(0);
        break;
      case "constantMultiple":
        break;
      case "power":
        this.calculation = String("f'(x) = " + this.powerForm.get('n')?.value * (this.powerForm.get('m')?.value ? this.powerForm.get('m')?.value : 1) + "x<sup>" + (this.powerForm.get('n')?.value - 1) + "</sup>");
        break;
      case "sum":
        break;
      case "difference":
        break;
      case "product":
        break;
      case "quotient":
        break;
      case "chain":
        break;
    }
    this.showCalculation = true;
  }

  clear() {
    this.calculation = "";
    this.showCalculation = false;
    switch (this.currRule) {
      case "constant":
        break;
      case "constantMultiple":
        break;
      case "power":
        break;
      case "sum":
        break;
      case "difference":
        break;
      case "product":
        break;
      case "quotient":
        break;
      case "chain":
        break;
    }
  }
}
