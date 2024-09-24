import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fractions',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './fractions.component.html',
  styleUrl: './fractions.component.css'
})
export class FractionsComponent {
  fractionsForm = new FormGroup({
    numerator1: new FormControl(),
    denominator1: new FormControl(),
    numerator2: new FormControl(),
    denominator2: new FormControl(),
  })
}
