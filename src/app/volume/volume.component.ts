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
  prismForm = new FormGroup({
    length: new FormControl(),
    width: new FormControl(),
    height: new FormControl(),
  })

  ngOnInit(): void {
    this.currShape = 'rectangle';
  }

  selectChange() {
    this.currShape = this.shape.nativeElement.value;
    this.showCalculation = false;
    this.clear();
  }

  calculate() {
    this.showCalculation = false;
    switch (this.currShape) {
      case "cone":
        break;
      case "cylinder":
        break;
      case "dodecahedron":
        break;
      case "ellipsoid":
        break;
      case "hexagonalPyramid":
        break;
      case "icosahedron":
        break;
      case "octagonalPyramid":
        break;
      case "octahedron":
        break;
      case "pentagonalPyramid":
        break;
      case "pentagrammicPyramid":
        break;
      case "prism":
        let base = this.prismForm.get("length")?.value * this.prismForm.get("width")?.value;
        this.calculation = String(base * this.prismForm.get("height")?.value);
        this.showCalculation = true;
        break;
      case "semisphere":
        break;
      case "sphere":
        break;
      case "squarePyramid":
        break;
      case "tetrahedron":
        break;
      case "torus":
        break;
    }
  }

  clear() {
    this.prismForm.get("length")?.setValue(null);
    this.prismForm.get("width")?.setValue(null);
    this.prismForm.get("height")?.setValue(null);
  }
}
