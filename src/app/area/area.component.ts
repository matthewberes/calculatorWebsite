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

  ngOnInit(): void {
    this.currShape = 'rectangle';
  }

  selectChange() {
    this.currShape = this.shape.nativeElement.value;
  }

  calculate() {

  }
}
