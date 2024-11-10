import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projectile-motion',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './projectile-motion.component.html',
  styleUrl: './projectile-motion.component.css'
})
export class ProjectileMotionComponent {
  @ViewChild('cliff') cliff!: ElementRef;
  cliffToggle: boolean = false;
  calculation: string = '';
  showCalculation: boolean = false;

  projectileForm = new FormGroup({
    velocity: new FormControl(),
    angle: new FormControl(),
    height: new FormControl()
  })

  constructor(private cdr: ChangeDetectorRef) { }

  selectChange() {
    this.cliffToggle = Boolean(Number(this.cliff.nativeElement.value));
  }

  calculate() {
    if (!this.projectileForm.get('velocity')?.value || !this.projectileForm.get('angle')?.value || (this.cliffToggle && !this.projectileForm.get('height')?.value)) {
      return;
    }
    this.showCalculation = false;
    let time: number = this.solveTime();
    let distance: number = this.solveDistanceX(time);
    let finalVelocity: number = this.solveFinalVelocity(time);
    let finalAngle: number = this.solveFinalAngle(time);
    let maxHeight: number = this.solveMaxHeight();
    this.calculation = "Time: " + String(time) + "<i>s<\/i><br>Range: " + String(distance) + "<i>m<\/i><br>Final Velocity: " + String(finalVelocity) + "<i>m/s<\/i><br>Final Angle: " + String(finalAngle) + "<i>°<\/i><br>Max Height: " + String(maxHeight) + "<i>m<\/i>";
    this.showCalculation = true;
  }

  solveTime(): number {
    let yVelocity = this.projectileForm.get("velocity")?.value * Math.sin(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    if (this.cliffToggle) {
      return Math.round((this.quadraticFormula(-4.9, yVelocity, this.cliffToggle ? this.projectileForm.get("height")?.value : 0) + Number.EPSILON) * 100) / 100;
    } else {
      return Math.round(((yVelocity / 9.8) * 2 + Number.EPSILON) * 100) / 100;
    }
  }

  solveDistanceX(time: number): number {
    let xVelocity = this.projectileForm.get("velocity")?.value * Math.cos(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    return Math.round(((xVelocity * time) + Number.EPSILON) * 100) / 100;
  }

  solveFinalVelocity(time: number): number {
    let xVelocity = this.projectileForm.get("velocity")?.value * Math.cos(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    let yVelocity = this.projectileForm.get("velocity")?.value * Math.sin(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    let yVelocityFinal = yVelocity - (9.8 * time);
    let hypotenuse = Math.sqrt(Math.pow(xVelocity, 2) + Math.pow(yVelocityFinal, 2));
    return Math.round((hypotenuse + Number.EPSILON) * 100) / 100;
  }

  solveFinalAngle(time: number) {
    let xVelocity = this.projectileForm.get("velocity")?.value * Math.cos(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    let yVelocity = this.projectileForm.get("velocity")?.value * Math.sin(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    let yVelocityFinal = yVelocity - (9.8 * time);
    return Math.round((Math.abs(Math.atan(yVelocityFinal / xVelocity) * (180 / Math.PI)) + Number.EPSILON) * 1) / 1;
  }

  solveMaxHeight(): number {
    let yVelocity = this.projectileForm.get("velocity")?.value * Math.sin(this.projectileForm.get("angle")?.value * (Math.PI / 180));
    let t = yVelocity / 9.8;
    let solvedQuadratic = (this.cliffToggle ? this.projectileForm.get("height")?.value : 0) + (yVelocity * t) - (4.9 * Math.pow(t, 2));
    return Math.round((solvedQuadratic + Number.EPSILON) * 100) / 100;
  }

  quadraticFormula(a: number, b: number, c: number): number {
    let x1: number = ((- b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
    let x2: number = ((- b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
    if (x1 < 0) {
      return x2;
    } else {
      return x1;
    }
  }

  clear() {
    this.showCalculation = false;
    this.projectileForm.get('velocity')?.setValue(null);
    this.projectileForm.get('angle')?.setValue(null);
    this.projectileForm.get('height')?.setValue(null);
  }
}
