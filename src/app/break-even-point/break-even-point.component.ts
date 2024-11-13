import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-break-even-point',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './break-even-point.component.html',
  styleUrl: './break-even-point.component.css'
})
export class BreakEvenPointComponent {
  calculation: string = "";
  showCalculation: boolean = false;
  costForm = new FormGroup({
    initial: new FormControl(),
    cost: new FormControl()
  })
  profitForm = new FormGroup({
    initial: new FormControl(),
    cost: new FormControl()
  })

  calculate() {
    console.log(this)
  }

  clear() {
    this.showCalculation = false;
    this.profitForm.get('initial')?.setValue(null);
    this.profitForm.get('cost')?.setValue(null);
    this.costForm.get('initial')?.setValue(null);
    this.costForm.get('cost')?.setValue(null);

  }
}
