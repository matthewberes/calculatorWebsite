import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SetUpService {
  currentCalc: string = "";

  constructor() { }

  //https://stackoverflow.com/questions/21019902/why-cant-javascript-sort-5-10-1
  numberSorter(a: number, b: number) {
    if (a < b) return -1;  // any negative number works
    if (a > b) return 1;   // any positive number works
    return 0; // equal values MUST yield zero
  }
}
