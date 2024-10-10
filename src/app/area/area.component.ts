import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-area',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './area.component.html',
  styleUrl: './area.component.css'
})
export class AreaComponent implements OnInit {
  calculation: string = "";
  showCalculation: boolean = false;
  currShape: string = "";
  rectangleForm = new FormGroup({
    length: new FormControl(),
    width: new FormControl()
  })
  triangleForm = new FormGroup({
    base: new FormControl(),
    height: new FormControl()
  })
  circleForm = new FormGroup({
    circleValue: new FormControl()
  })
  @ViewChild('shape') shape!: ElementRef;
  @ViewChild('inputType') inputType!: ElementRef;

  ngOnInit(): void {
    this.currShape = 'rectangle';
  }

  selectChange() {
    this.currShape = this.shape.nativeElement.value;
    this.clear();
  }

  calculate() {
    this.showCalculation = false;
    switch (this.currShape) {
      case "rectangle":
        this.calculation = String(this.rectangleForm.get("length")?.value * this.rectangleForm.get("width")?.value);
        break;
      case "triangle":
        this.calculation = String((this.triangleForm.get("base")?.value * this.triangleForm.get("height")?.value) / 2);
        break;
      case "circle":
        if (this.inputType.nativeElement.value == "radius") {
          this.calculation = String(Math.pow(this.circleForm.get("circleValue")?.value, 2) * Math.PI);
        } else {
          this.calculation = String(Math.pow(this.circleForm.get("circleValue")?.value / 2, 2) * Math.PI);
        }
        break;
    }
    this.showCalculation = true;
  }

  clear() {
    this.rectangleForm.get("length")?.setValue(null);
    this.rectangleForm.get("width")?.setValue(null);
    this.triangleForm.get("base")?.setValue(null);
    this.triangleForm.get("height")?.setValue(null);
    this.circleForm.get("circleValue")?.setValue(null);
    this.calculation = "";
    this.showCalculation = false;
  }
}
