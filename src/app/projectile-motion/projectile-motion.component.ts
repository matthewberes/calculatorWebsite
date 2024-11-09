import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-projectile-motion',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './projectile-motion.component.html',
  styleUrl: './projectile-motion.component.css'
})
export class ProjectileMotionComponent {
  calculation: string = '';
  showCalculation: boolean = false;

  projectileForm = new FormGroup({
    velocity: new FormControl(),
    angle: new FormControl()
  })

  calculate() {

  }

  clear() {

  }
}
