import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray  } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mean',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule ],
  templateUrl: './mean.component.html',
  styleUrl: './mean.component.css'
})
export class MeanComponent implements OnInit {
  subscription: Subscription = new Subscription();
  inputs: number[] = [];
  calculation: number = 0;
  showCalculation: boolean = false;
  setUpForm = new FormGroup({
    numberOfInputs: new FormControl()
  })
  inputForm = new FormGroup({})

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
  }

  calculateInputs() {
    this.showCalculation = false;
    this.inputs = Array.from(Array(Number(this.setUpForm.value.numberOfInputs)).keys())    
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl())
    })
    this.cdr.detectChanges();
  }

  calculateMean() {
    let sum: number = 0;
    this.inputs.forEach(value => {
      sum += this.inputForm.get(String(value))?.value;
    })
    this.calculation = sum / this.setUpForm.value.numberOfInputs;
    this.showCalculation = true;
    this.cdr.detectChanges();
  }

  //Not needed since I switched to number box inputs
  nullCheck(): boolean {
    let resp: boolean = true;
    this.inputs.forEach(value => {
      if (!this.inputForm.get(String(value))?.value){
        resp = false
      }
    })
    return resp;
  }
  
  //Not needed since I switched to number box inputs
  numberCheck(){
    let resp: boolean = true;
    this.inputs.forEach(value => {
      if (isNaN(Number(this.inputForm.get(String(value))?.value))){
        resp = false
      }
    })
    return resp;
  }
}
