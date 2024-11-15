import { NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-break-even-point',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './break-even-point.component.html',
  styleUrl: './break-even-point.component.css'
})
export class BreakEvenPointComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) { }

  chart: any;
  public config: any = {
    type: 'line',
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

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
    let answer: number = (this.costForm.get("initial")?.value - (!this.profitForm.get("initial")?.value ? 0 : this.profitForm.get("initial")?.value)) / (this.profitForm.get("cost")?.value - this.costForm.get("cost")?.value);
    let amount: number = answer * this.profitForm.get("cost")?.value;
    this.calculation = "Break-even point: " + String(answer) + " intervals / units, at $" + String(amount);
    this.showCalculation = true;
  }

  clear() {
    this.showCalculation = false;
    this.costForm.get('initial')?.setValue(null);
    this.costForm.get('cost')?.setValue(null);
    this.profitForm.get('initial')?.setValue(null);
    this.profitForm.get('cost')?.setValue(null);
  }

  ngOnInit(): void {
    this.chart = new Chart('myChart', this.config)
    this.cdr.detectChanges();
  }
}
