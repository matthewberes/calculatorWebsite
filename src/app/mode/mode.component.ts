import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SetUpService } from '../services/set-up.service';
import { SetUpComponent } from '../set-up/set-up.component';

@Component({
  selector: 'app-mode',
  standalone: true,
  imports: [SetUpComponent, NgIf],
  templateUrl: './mode.component.html',
  styleUrl: './mode.component.css'
})
export class ModeComponent implements OnInit{
  
  constructor(public setUpService: SetUpService){}

  ngOnInit(): void {
  this.setUpService.currentCalc = "Mode"
  }

  calculateMode(){

  }


}
