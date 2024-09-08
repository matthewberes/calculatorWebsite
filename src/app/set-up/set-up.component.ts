import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SetUpService } from '../services/set-up.service';

@Component({
  selector: 'app-set-up',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './set-up.component.html',
  styleUrl: './set-up.component.css'
})
export class SetUpComponent {
  inputs: number[] = [];
  calculation: string = "";
  showCalculation: boolean = false;
  setUpForm = new FormGroup({
    numberOfInputs: new FormControl()
  })
  inputForm = new FormGroup({})

  constructor(public setUpService: SetUpService, private cdr: ChangeDetectorRef) { }

  calculateInputs() {
    this.showCalculation = false;
    this.inputs = Array.from(Array(Number(this.setUpForm.value.numberOfInputs)).keys())
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl())
    })
    this.cdr.detectChanges();
  }

  calculate(calcType: string) {
    switch (calcType) {
      case "Mean":
        this.calculateMean()
        break;
      case "Median":
        this.calculateMedian()
        break;
      case "Mode":
        this.calculateMode();
        break;
    }
  }

  calculateMean() {
    let sum: number = 0;
    this.inputs.forEach(value => {
      sum += this.inputForm.get(String(value))?.value;
    })
    this.calculation = String(sum / this.setUpForm.value.numberOfInputs);
    this.showCalculation = true;
    this.cdr.detectChanges();
  }

  calculateMedian() {
    let inputArray: number[] = [];
    this.inputs.forEach(value => {
      inputArray.push(this.inputForm.get(String(value))?.value);
    })
    let ascendingArray: number[] = inputArray.sort(this.setUpService.numberSorter);
    if (this.inputs.length % 2 == 0) { //Even
      this.calculation = String((ascendingArray[ascendingArray.length / 2] + ascendingArray[(ascendingArray.length / 2) - 1]) / 2);
      this.showCalculation = true;
    } else { //Odd
      this.calculation = String(ascendingArray[(ascendingArray.length / 2) - .5]);
      this.showCalculation = true;
    }
  }

  calculateMode() {
    let itemizedMap = new Map<number, number>();
    let currHighest: number[] = [];
    let highestVal: number;
    this.inputs.forEach(value => {
      if (itemizedMap.has(this.inputForm.get(String(value))?.value)) {
        itemizedMap.set(this.inputForm.get(String(value))?.value, (itemizedMap.get(this.inputForm.get(String(value))?.value) ?? 0) + 1);
      } else {
        itemizedMap.set(this.inputForm.get(String(value))?.value, 1);
      }
    })
    itemizedMap.forEach((value, key) => {
      if (value > highestVal) {
        currHighest = [];
        currHighest.push(key);
        highestVal = value;
      } else if (value == highestVal) {
        currHighest.push(key);
      } else if (currHighest.length == 0) {
        currHighest.push(key);
        highestVal = value;
      }
    })
    this.calculation = String(currHighest);
    this.showCalculation = true;
    this.cdr.detectChanges();
  }


  //Not needed since I switched to number box inputs
  nullCheck(): boolean {
    let resp: boolean = true;
    this.inputs.forEach(value => {
      if (!this.inputForm.get(String(value))?.value) {
        resp = false
      }
    })
    return resp;
  }

  //Not needed since I switched to number box inputs
  numberCheck() {
    let resp: boolean = true;
    this.inputs.forEach(value => {
      if (isNaN(Number(this.inputForm.get(String(value))?.value))) {
        resp = false
      }
    })
    return resp;
  }
}
