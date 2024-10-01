import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { SetUpService } from '../services/set-up.service';
import { SetUpComponent } from '../set-up/set-up.component';

@Component({
  selector: 'app-mean',
  standalone: true,
  imports: [SetUpComponent, NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './mean.component.html',
  styleUrl: './mean.component.css'
})
export class MeanComponent implements OnInit {
  constructor(public setUpService: SetUpService) { }

  ngOnInit(): void {
    this.setUpService.currentCalc = "Mean";
  }
}