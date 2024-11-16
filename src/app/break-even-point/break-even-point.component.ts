import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  chart: any;
  public config: any = {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Cost',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgb(255, 99, 132)'
        ],
        borderWidth: 1
      }, {
        label: 'Revenue',
        data: [],
        backgroundColor: [
          'rgba(124, 252, 0, 0.2)'
        ],
        borderColor: [
          'rgb(124, 252, 0)'
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
    this.populateGraph(answer);
    this.showCalculation = true;
    this.chart.update();
  }

  clear() {
    this.showCalculation = false;
    this.costForm.get('initial')?.setValue(null);
    this.costForm.get('cost')?.setValue(null);
    this.profitForm.get('initial')?.setValue(null);
    this.profitForm.get('cost')?.setValue(null);
  }

  populateGraph(intervals: number) {
    let costData = [];
    let profitData = [];
    let labelData = [];
    for (let i = 0; i < (intervals * 2) + 1; i++) {
      labelData.push(i);
      costData.push((i * this.costForm.get('cost')?.value) + this.costForm.get('initial')?.value);
      profitData.push((i * this.profitForm.get('cost')?.value) + this.profitForm.get('initial')?.value);
    }
    this.config.data.labels = labelData;
    this.config.data.datasets[0].data = costData;
    this.config.data.datasets[1].data = profitData;
  }

  ngOnInit(): void {
    this.chart = new Chart('myChart', this.config);
  }
}
