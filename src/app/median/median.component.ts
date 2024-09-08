import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SetUpService } from '../services/set-up.service';
import { SetUpComponent } from '../set-up/set-up.component';

@Component({
  selector: 'app-median',
  standalone: true,
  imports: [SetUpComponent, NgIf],
  templateUrl: './median.component.html',
  styleUrl: './median.component.css'
})
export class MedianComponent implements OnInit {
  constructor(public setUpService: SetUpService) { }

  ngOnInit(): void {
    this.setUpService.currentCalc = "Median"
  }
}
