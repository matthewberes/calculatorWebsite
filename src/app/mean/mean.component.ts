import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule  } from '@angular/forms';
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
    this.cdr.detectChanges();
  }

  calculateMean() {
    this.inputs.forEach(x => {
      this.inputForm.addControl(String(x), new FormControl())
    })
    this.calculation = 11;
    this.showCalculation = true;
    this.cdr.detectChanges();
  }
}
