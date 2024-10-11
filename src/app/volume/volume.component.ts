import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-volume',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './volume.component.html',
  styleUrl: './volume.component.css'
})
export class VolumeComponent implements OnInit {
  calculation: string = "";
  showCalculation: boolean = false;
  currShape: string = "";
  @ViewChild('shape') shape!: ElementRef;
  @ViewChild('circleMeasurementType') circleMeasurementType!: ElementRef;
  @ViewChild('sphereMeasurementType') sphereMeasurementType!: ElementRef;

  rectangularPrismForm = new FormGroup({
    length: new FormControl(),
    width: new FormControl(),
    height: new FormControl()
  })
  circularForm = new FormGroup({
    circleValue: new FormControl(),
    height: new FormControl()
  })
  gonalPrismForm = new FormGroup({
    length: new FormControl(),
    height: new FormControl()
  })
  sphereForm = new FormGroup({
    circleValue: new FormControl()
  })
  triangularPrismForm = new FormGroup({
    side1: new FormControl(),
    side2: new FormControl(),
    side3: new FormControl(),
    height: new FormControl()
  })
  triangularPyramidForm = new FormGroup({
    base: new FormControl(),
    baseHeight: new FormControl(),
    pyramidHeight: new FormControl()
  })

  ngOnInit(): void {
    this.currShape = 'cone';
  }

  selectChange() {
    this.currShape = this.shape.nativeElement.value;
    this.calculation = "";
    this.showCalculation = false;
    this.clear();
  }

  calculate() {
    this.showCalculation = false;
    let base: number
    switch (this.currShape) {
      case "cone":
        if (this.circleMeasurementType.nativeElement.value == "radius") {
          base = Math.pow(this.circularForm.get("circleValue")?.value, 2) * Math.PI;
        } else {
          base = Math.pow(this.circularForm.get("circleValue")?.value / 2, 2) * Math.PI;
        }
        this.calculation = String(base * (this.circularForm.get("height")?.value / 3));
        this.showCalculation = true;
        break;
      case "cylinder":
        if (this.circleMeasurementType.nativeElement.value == "radius") {
          base = Math.pow(this.circularForm.get("circleValue")?.value, 2) * Math.PI;
        } else {
          base = Math.pow(this.circularForm.get("circleValue")?.value / 2, 2) * Math.PI;
        }
        this.calculation = String(base * this.circularForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "dodecahedron":
        break;
      case "ellipsoid":
        break;
      case "hexagonalPrism":
        base = ((3 * Math.sqrt(3)) / 2) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String(base * this.gonalPrismForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "hexagonalPyramid":
        base = ((3 * Math.sqrt(3)) / 2) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String((base * this.gonalPrismForm.get("height")?.value) / 3);
        this.showCalculation = true;
        break;
        break;
      case "icosahedron":
        break;
      case "octagonalPrism":
        base = (2 * (1 + Math.sqrt(2))) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String(base * this.gonalPrismForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "octagonalPyramid":
        base = (2 * (1 + Math.sqrt(2))) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String((base * this.gonalPrismForm.get("height")?.value) / 3);
        this.showCalculation = true;
        break;
      case "octahedron":
        break;
      case "pentagonalPrism":
        base = (((1 / 4) * Math.sqrt(5 * (5 + (2 * Math.sqrt(5)))))) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String(base * this.gonalPrismForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "pentagonalPyramid":
        base = (((1 / 4) * Math.sqrt(5 * (5 + (2 * Math.sqrt(5)))))) * (Math.pow(this.gonalPrismForm.get("length")?.value, 2));
        this.calculation = String((base * this.gonalPrismForm.get("height")?.value) / 3);
        this.showCalculation = true;
        break;
      case "pentagrammicPrism":
        break;
      case "pentagrammicPyramid":
        break;
      case "rectangularPrism":
        base = this.rectangularPrismForm.get("length")?.value * this.rectangularPrismForm.get("width")?.value;
        this.calculation = String(base * this.rectangularPrismForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "semisphere":
        if (this.sphereMeasurementType.nativeElement.value == "radius") {
          base = Math.pow(this.sphereForm.get("circleValue")?.value, 3) * Math.PI;
        } else {
          base = Math.pow(this.sphereForm.get("circleValue")?.value / 2, 3) * Math.PI;
        }
        this.calculation = String((base * (4 / 3)) / 2);
        this.showCalculation = true;
        break;
      case "sphere":
        if (this.sphereMeasurementType.nativeElement.value == "radius") {
          base = Math.pow(this.sphereForm.get("circleValue")?.value, 3) * Math.PI;
        } else {
          base = Math.pow(this.sphereForm.get("circleValue")?.value / 2, 3) * Math.PI;
        }
        this.calculation = String(base * (4 / 3));
        this.showCalculation = true;
        break;
      case "squarePyramid":
        base = this.rectangularPrismForm.get("length")?.value * this.rectangularPrismForm.get("width")?.value;
        this.calculation = String((base * this.rectangularPrismForm.get("height")?.value) / 3);
        this.showCalculation = true;
        break;
      case "tetrahedron":
        break;
      case "torus":
        break;
      case "triangularPrism":
        this.calculation = String(((1 / 4) * this.triangularPrismForm.get("height")?.value) * Math.sqrt((-1 * Math.pow(this.triangularPrismForm.get("side1")?.value, 4)) + (2 * Math.pow(this.triangularPrismForm.get("side1")?.value * this.triangularPrismForm.get("side2")?.value, 2)) + (2 * Math.pow(this.triangularPrismForm.get("side1")?.value * this.triangularPrismForm.get("side3")?.value, 2)) - (Math.pow(this.triangularPrismForm.get("side2")?.value, 4)) + (2 * Math.pow(this.triangularPrismForm.get("side2")?.value * this.triangularPrismForm.get("side3")?.value, 2)) - Math.pow(this.triangularPrismForm.get("side3")?.value, 4)));
        this.showCalculation = true;
        break;
      case "triangularPyramid":
        base = (this.triangularPyramidForm.get("base")?.value * this.triangularPyramidForm.get("baseHeight")?.value) / 2;
        this.calculation = String((base * this.triangularPyramidForm.get("pyramidHeight")?.value) / 3);
        this.showCalculation = true;
        break;
    }
  }

  clear() {
    this.rectangularPrismForm.get("length")?.setValue(null);
    this.rectangularPrismForm.get("width")?.setValue(null);
    this.rectangularPrismForm.get("height")?.setValue(null);
    this.circularForm.get("circleValue")?.setValue(null);
    this.circularForm.get("height")?.setValue(null);
    this.gonalPrismForm.get("length")?.setValue(null);
    this.gonalPrismForm.get("height")?.setValue(null);
    this.sphereForm.get("circleValue")?.setValue(null);
    this.triangularPrismForm.get("side1")?.setValue(null);
    this.triangularPrismForm.get("side2")?.setValue(null);
    this.triangularPrismForm.get("side3")?.setValue(null);
    this.triangularPrismForm.get("height")?.setValue(null);
    this.calculation = "";
    this.showCalculation = false;
  }
}
