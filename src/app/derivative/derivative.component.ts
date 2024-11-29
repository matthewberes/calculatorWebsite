import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
//didn't realize how large this would become, this needs to be split into different components
@Component({
  selector: 'app-derivative',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  templateUrl: './derivative.component.html',
  styleUrl: './derivative.component.css'
})
export class DerivativeComponent {
  constructor(private cdr: ChangeDetectorRef) { }

  calculation: string = "";
  showCalculation: boolean = false;
  currRule: string = "constant";
  @ViewChild('rule') rule!: ElementRef;

  constantForm = new FormGroup({
    c: new FormControl()
  });
  constantC: string = "";

  constantMultipleForm = new FormGroup({
    c: new FormControl(),
    m: new FormControl,
    n: new FormControl
  })
  constantMultipleC: string = "";
  constantMultipleN: string = "";
  constantMultipleM: string = "";

  powerForm = new FormGroup({
    n: new FormControl(),
    m: new FormControl()
  });
  powerN: string = "";
  powerM: string = "";

  sumSetUpForm = new FormGroup({
    numberOfInputs: new FormControl()
  })
  inputs: number[] = [];
  inputOptions: string[] = [];
  operators: string[] = [];
  sumInputForm = new FormGroup({})
  sumInputsC: string[] = [];
  sumInputsN: string[] = [];
  sumInputsM: string[] = [];

  productInputForm = new FormGroup({
    gA: new FormControl(),
    gB: new FormControl(),
    gC: new FormControl(),
    gM: new FormControl(),
    gN: new FormControl(),
    gNA: new FormControl(),
    gNB: new FormControl(),
    gAXBox: new FormControl(),
    gBXBox: new FormControl(),
    gAPowerBox: new FormControl(),
    gBPowerBox: new FormControl(),
    hA: new FormControl(),
    hB: new FormControl(),
    hC: new FormControl(),
    hM: new FormControl(),
    hN: new FormControl(),
    hNA: new FormControl(),
    hNB: new FormControl(),
    hAXBox: new FormControl(false),
    hBXBox: new FormControl(false),
    hAPowerBox: new FormControl(false),
    hBPowerBox: new FormControl(false),
  })
  gAValue: string = "";
  gANValue: string = "";
  gBValue: string = "";
  gBNValue: string = "";
  gCValue: string = "";
  gMValue: string = "";
  gNValue: string = "";
  hAValue: string = "";
  hANValue: string = "";
  hBValue: string = "";
  hBNValue: string = "";
  hCValue: string = "";
  hMValue: string = "";
  hNValue: string = "";
  selectG: string = "binomial";
  selectH: string = "binomial";
  operatorG: string = "+";
  operatorH: string = "+";
  gBinomialAX: boolean = false;
  gBinomialBX: boolean = false;
  gBinomialAPower: boolean = false;
  gBinomialBPower: boolean = false;
  hBinomialAX: boolean = false;
  hBinomialBX: boolean = false;
  hBinomialAPower: boolean = false;
  hBinomialBPower: boolean = false;
  gTemp: string = "";
  gDerivativeTemp: string = "";
  hTemp: string = "";
  hDerivativeTemp: string = "";

  selectChange() {
    this.currRule = this.rule.nativeElement.value;
    this.showCalculation = false;
    this.clear();
  }

  change(box: string, event: Event, num?: number) {
    switch (box) {
      case "constantC":
        if (!this.constantForm.get('c')?.value) {
          this.constantC = "";
        } else {
          this.constantC = String(this.constantForm.get('c')?.value);
        }
        break;
      case "constantMultipleC":
        if (!this.constantMultipleForm.get('c')?.value) {
          this.constantMultipleC = "";
        } else {
          this.constantMultipleC = String(this.constantMultipleForm.get('c')?.value);
        }
        break;
      case "constantMultipleN":
        if (!this.constantMultipleForm.get('n')?.value) {
          this.constantMultipleN = "";
        } else {
          this.constantMultipleN = String(this.constantMultipleForm.get('n')?.value);
        }
        break;
      case "constantMultipleM":
        if (!this.constantMultipleForm.get('m')?.value) {
          this.constantMultipleM = "";
        } else {
          this.constantMultipleM = String(this.constantMultipleForm.get('m')?.value);
        }
        break;
      case "powerN":
        if (!this.powerForm.get('n')?.value) {
          this.powerN = "";
        } else {
          this.powerN = String(this.powerForm.get('n')?.value);
        }
        break;
      case "powerM":
        if (!this.powerForm.get('m')?.value) {
          this.powerM = "";
        } else {
          this.powerM = String(this.powerForm.get('m')?.value);
        }
        break;
      case "C":
        if (!this.sumInputForm.get(String((num ? num : 0) + box))?.value) {
          this.sumInputsC[num ? num : 0] = "";
        } else {
          this.sumInputsC[num ? num : 0] = String(this.sumInputForm.get(String((num ? num : 0) + box))?.value);
        }
        break;
      case "N":
        if (!this.sumInputForm.get(String((num ? num : 0) + box))?.value) {
          this.sumInputsN[num ? num : 0] = "";
        } else {
          this.sumInputsN[num ? num : 0] = String(this.sumInputForm.get(String((num ? num : 0) + box))?.value);
        }
        break;
      case "M":
        if (!this.sumInputForm.get(String((num ? num : 0) + box))?.value) {
          this.sumInputsM[num ? num : 0] = "";
        } else {
          this.sumInputsM[num ? num : 0] = String(this.sumInputForm.get(String((num ? num : 0) + box))?.value);
        }
        break;
      case "gA":
        if (!this.productInputForm.get("gA")?.value) {
          this.gAValue = "";
        } else {
          this.gAValue = String(this.productInputForm.get("gA")?.value);
        }
        break;
      case "gNA":
        if (!this.productInputForm.get("gNA")?.value) {
          this.gANValue = "";
        } else {
          this.gANValue = String(this.productInputForm.get("gNA")?.value);
        }
        break;
      case "gNB":
        if (!this.productInputForm.get("gNB")?.value) {
          this.gBNValue = "";
        } else {
          this.gBNValue = String(this.productInputForm.get("gNB")?.value);
        }
        break;
      case "gB":
        if (!this.productInputForm.get("gB")?.value) {
          this.gBValue = "";
        } else {
          this.gBValue = String(this.productInputForm.get("gB")?.value);
        }
        break;
      case "gBA":
        if (!this.productInputForm.get("gNB")?.value) {
          this.gBNValue = "";
        } else {
          this.gBNValue = String(this.productInputForm.get("gNB")?.value);
        }
        break;
      case "gC":
        if (!this.productInputForm.get("gC")?.value) {
          this.gCValue = "";
        } else {
          this.gCValue = String(this.productInputForm.get("gC")?.value);
        }
        break;
      case "gM":
        if (!this.productInputForm.get("gM")?.value) {
          this.gMValue = "";
        } else {
          this.gMValue = String(this.productInputForm.get("gM")?.value);
        }
        break;
      case "gN":
        if (!this.productInputForm.get("gN")?.value) {
          this.gNValue = "";
        } else {
          this.gNValue = String(this.productInputForm.get("gN")?.value);
        }
        break;
      case "hA":
        if (!this.productInputForm.get("hA")?.value) {
          this.hAValue = "";
        } else {
          this.hAValue = String(this.productInputForm.get("hA")?.value);
        }
        break;
      case "hNA":
        if (!this.productInputForm.get("hNA")?.value) {
          this.hANValue = "";
        } else {
          this.hANValue = String(this.productInputForm.get("hNA")?.value);
        }
        break;
      case "hNB":
        if (!this.productInputForm.get("hNB")?.value) {
          this.hBNValue = "";
        } else {
          this.hBNValue = String(this.productInputForm.get("hNB")?.value);
        }
        break;
      case "hB":
        if (!this.productInputForm.get("hB")?.value) {
          this.hBValue = "";
        } else {
          this.hBValue = String(this.productInputForm.get("hB")?.value);
        }
        break;
      case "hBA":
        if (!this.productInputForm.get("hNB")?.value) {
          this.hBNValue = "";
        } else {
          this.hBNValue = String(this.productInputForm.get("hNB")?.value);
        }
        break;
      case "hC":
        if (!this.productInputForm.get("hC")?.value) {
          this.hCValue = "";
        } else {
          this.hCValue = String(this.productInputForm.get("hC")?.value);
        }
        break;
      case "hM":
        if (!this.productInputForm.get("hM")?.value) {
          this.hMValue = "";
        } else {
          this.hMValue = String(this.productInputForm.get("hM")?.value);
        }
        break;
      case "hN":
        if (!this.productInputForm.get("hN")?.value) {
          this.hNValue = "";
        } else {
          this.hNValue = String(this.productInputForm.get("hN")?.value);
        }
        break;
    }
  }

  calculateInputs() {
    this.showCalculation = false;
    this.inputs = Array.from(Array(Number(this.sumSetUpForm.value.numberOfInputs)).keys());
    let i: number = 0;
    this.inputs.forEach(x => {
      if (!this.sumInputForm.get(String(i))) {
        this.sumInputForm.addControl(String(x), new FormControl());
        this.sumInputForm.addControl(String(x) + "C", new FormControl());
        this.sumInputForm.addControl(String(x) + "M", new FormControl());
        this.sumInputForm.addControl(String(x) + "N", new FormControl());
        this.inputOptions[i] = "constant";
        this.operators[i] = "plus";
        this.sumInputsC[i] = "";
        this.sumInputsN[i] = "";
        this.sumInputsM[i] = "";
      }
      i++;
    })
    this.cdr.detectChanges();
  }

  updateRules(num: number, val: any) {
    this.inputOptions[num] = val;
    this.cdr.detectChanges();
  }

  updateOperators(num: number, val: any) {
    this.operators[num] = val;
  }

  updateProductRule(letter: string, val: any) {
    switch (letter) {
      case "g":
        this.selectG = val;
        break;
      case "h":
        this.selectH = val;
        break;
    }
  }

  updateProductOperator(letter: string, val: string) {
    switch (letter) {
      case "g":
        this.operatorG = val;
        break;
      case "h":
        this.operatorH = val;
        break;
    }
  }

  setX(func: string, variable: string, event: any) {
    switch (func) {
      case "g":
        switch (variable) {
          case "a":
            this.gBinomialAX = event.currentTarget.checked;
            if (!event.currentTarget.checked) {
              this.gBinomialAPower = false;
              this.productInputForm.get('gAPowerBox')?.setValue(false);
            }
            break;
          case "b":
            this.gBinomialBX = event.currentTarget.checked;
            if (!event.currentTarget.checked) {
              this.gBinomialBPower = false;
              this.productInputForm.get('gBPowerBox')?.setValue(false);
            }
            break
        }
        break;
      case "h":
        switch (variable) {
          case "a":
            this.hBinomialAX = event.currentTarget.checked;
            if (!event.currentTarget.checked) {
              this.hBinomialAPower = false;
              this.productInputForm.get('hAPowerBox')?.setValue(false);
            }
            break;
          case "b":
            this.hBinomialBX = event.currentTarget.checked;
            if (!event.currentTarget.checked) {
              this.hBinomialBPower = false;
              this.productInputForm.get('hBPowerBox')?.setValue(false);
            }
            break
        }
        break;
    }
  }

  setPower(func: string, variable: string, event: any) {
    switch (func) {
      case "g":
        switch (variable) {
          case "a":
            this.gBinomialAPower = event.currentTarget.checked;
            break;
          case "b":
            this.gBinomialBPower = event.currentTarget.checked;
            break
        }
        break;
      case "h":
        switch (variable) {
          case "a":
            this.hBinomialAPower = event.currentTarget.checked;
            break;
          case "b":
            this.hBinomialBPower = event.currentTarget.checked;
            break
        }
        break;
    }
  }

  calculate() {
    this.showCalculation = false;
    switch (this.currRule) {
      case "constant":
        this.calculation = "f'(x) = " + String(0);
        break;
      case "constantMultiple":
        this.calculation = "f'(x) = " + String((this.constantMultipleForm.get('c')?.value * this.constantMultipleForm.get('n')?.value * (this.constantMultipleForm.get('m')?.value ? this.constantMultipleForm.get('m')?.value : 1)) + "x<sup>" + (this.constantMultipleForm.get('n')?.value - 1) + "</sup>");
        break;
      case "power":
        this.calculation = "f'(x) = " + String(this.powerForm.get('n')?.value * (this.powerForm.get('m')?.value ? this.powerForm.get('m')?.value : 1) + "x<sup>" + (this.powerForm.get('n')?.value - 1) + "</sup>");
        break;
      case "sum":
        this.calculation = "f'(x) = ";
        let i: number = 0;
        this.inputs.forEach(x => {
          switch (this.inputOptions[i]) {
            case "constantMultiple":
              this.calculation += String((this.sumInputForm.get(String(i) + 'C')?.value * this.sumInputForm.get(String(i) + 'N')?.value * (this.sumInputForm.get(String(i) + 'M')?.value ? this.sumInputForm.get(String(i) + 'M')?.value : 1)) + "x<sup>" + (this.sumInputForm.get(String(i) + 'N')?.value - 1) + "</sup>");
              break;
            case "power":
              this.calculation += String(this.sumInputForm.get(String(i) + 'N')?.value * (this.sumInputForm.get(String(i) + 'M')?.value ? this.sumInputForm.get(String(i) + 'M')?.value : 1) + "x<sup>" + (this.sumInputForm.get(String(i) + 'N')?.value - 1) + "</sup>");
              break;
          }
          if (i + 1 != this.inputs.length && this.inputOptions[i] != "constant" && this.inputOptions[i + 1] != "constant") {
            switch (this.operators[i]) {
              case "plus":
                this.calculation += " + ";
                break;
              case "minus":
                this.calculation += " - ";
                break;
            }
          }
          i++;
        })
        break;
      case "product":
        this.calculation = "f'(x) = ";
        this.gTemp = "";
        this.gDerivativeTemp = "";
        this.hTemp = "";
        this.hDerivativeTemp = "";
        switch (this.selectG) {
          case "binomial":
            if (this.productInputForm.get('gAXBox')?.value && !this.productInputForm.get('gAPowerBox')?.value) {
              this.gTemp += String(this.productInputForm.get('gA')?.value && (this.productInputForm.get('gA')?.value != 1 ? this.productInputForm.get('gA')?.value : "") + "x");
              this.gDerivativeTemp += String(this.productInputForm.get('gA')?.value && this.productInputForm.get('gA')?.value != 1 ? this.productInputForm.get('gA')?.value : 1);
            } else if (this.productInputForm.get('gAXBox')?.value && this.productInputForm.get('gAPowerBox')?.value) {
              if (this.productInputForm.get('gNA')?.value - 1 != 1 && this.productInputForm.get('gNA')?.value - 1 != 0) {
                this.gTemp += String(this.productInputForm.get('gA')?.value + "x<sup>" + this.productInputForm.get('gNA')?.value + "</sup>");
                this.gDerivativeTemp += String(this.productInputForm.get('gNA')?.value * this.productInputForm.get('gA')?.value + "x<sup>" + (this.productInputForm.get('gNA')?.value - 1) + "</sup>");
              } else if (this.productInputForm.get('gNA')?.value - 1 == 1) {
                this.gTemp += String(this.productInputForm.get('gA')?.value + "x<sup>" + this.productInputForm.get('gNA')?.value + "</sup>");
                this.gDerivativeTemp += String(this.productInputForm.get('gNA')?.value * this.productInputForm.get('gA')?.value + "x");
              } else if (this.productInputForm.get('gNA')?.value - 1 == 0) {
                this.gTemp += String(this.productInputForm.get('gA')?.value + "x");
                this.gDerivativeTemp += String(this.productInputForm.get('gA')?.value);
              }
            } else if (!this.productInputForm.get('gAXBox')?.value) {
              this.gTemp += String(this.productInputForm.get('gA')?.value);
              this.gDerivativeTemp += "0";
            }
            this.gTemp += " " + this.operatorG + " ";
            this.gDerivativeTemp += " " + this.operatorG + " ";
            if (this.productInputForm.get('gBXBox')?.value && !this.productInputForm.get('gBPowerBox')?.value) {
              this.gTemp += String(this.productInputForm.get('gB')?.value && (this.productInputForm.get('gB')?.value != 1 ? this.productInputForm.get('gB')?.value : "") + "x");
              this.gDerivativeTemp += String(this.productInputForm.get('gB')?.value && this.productInputForm.get('gB')?.value != 1 ? this.productInputForm.get('gB')?.value : 1);
            } else if (this.productInputForm.get('gBXBox')?.value && this.productInputForm.get('gBPowerBox')?.value) {
              if (this.productInputForm.get('gNB')?.value - 1 != 1 && this.productInputForm.get('gNB')?.value - 1 != 0) {
                this.gTemp += String(this.productInputForm.get('gB')?.value + "x<sup>" + this.productInputForm.get('gNB')?.value + "</sup>");
                this.gDerivativeTemp += String(this.productInputForm.get('gNB')?.value * this.productInputForm.get('gB')?.value + "x<sup>" + (this.productInputForm.get('gNB')?.value - 1) + "</sup>");
              } else if (this.productInputForm.get('gNB')?.value - 1 == 1) {
                this.gTemp += String(this.productInputForm.get('gB')?.value + "x<sup>" + this.productInputForm.get('gNB')?.value + "</sup>");
                this.gDerivativeTemp += String(this.productInputForm.get('gNB')?.value * this.productInputForm.get('gB')?.value + "x");
              } else if (this.productInputForm.get('gNB')?.value - 1 == 0) {
                this.gTemp += String(this.productInputForm.get('gB')?.value + "x");
                this.gDerivativeTemp += String(this.productInputForm.get('gB')?.value);
              }
            } else if (!this.productInputForm.get('gBXBox')?.value) {
              this.gTemp += String(this.productInputForm.get('gB')?.value);
              this.gDerivativeTemp += "0";
            }
            break;
          case "constant":
            this.gTemp = String(this.productInputForm.get('gC')?.value);
            this.gDerivativeTemp = "0";
            break;
          case "constantMultiple":
            this.gTemp = String((this.productInputForm.get('gC')?.value) + " * " + (this.productInputForm.get('gM')?.value ? this.productInputForm.get('gM')?.value : "") + (this.productInputForm.get('gN')?.value != 1 && this.productInputForm.get('gN')?.value != 0 ? "x<sup>" + (this.productInputForm.get('gN')?.value) + "</sup>" : "x"));
            this.gDerivativeTemp = String((this.productInputForm.get('gC')?.value * this.productInputForm.get('gN')?.value * (this.productInputForm.get('gM')?.value ? this.productInputForm.get('gM')?.value : 1)) + (this.productInputForm.get('gN')?.value - 1 != 1 && this.productInputForm.get('gN')?.value - 1 != 0 ? "x<sup>" + (this.productInputForm.get('gN')?.value - 1) + "</sup>" : (this.productInputForm.get('gN')?.value - 1 != 0 ? "x" : "")));
            break;
          case "power":
            this.gTemp = String((this.productInputForm.get('gM')?.value && this.productInputForm.get('gM')?.value != 1 ? this.productInputForm.get('gM')?.value : "") + (this.productInputForm.get('gN')?.value != 1 && this.productInputForm.get('gN')?.value != 0 ? "x<sup>" + (this.productInputForm.get('gN')?.value) + "</sup>" : "x"));
            this.gDerivativeTemp = String(this.productInputForm.get('gN')?.value * (this.productInputForm.get('gM')?.value ? this.productInputForm.get('gM')?.value : 1) + (this.productInputForm.get('gN')?.value - 1 != 1 && this.productInputForm.get('gN')?.value - 1 != 0 ? "x<sup>" + (this.productInputForm.get('gN')?.value - 1) + "</sup>" : (this.productInputForm.get('gN')?.value - 1 != 0 ? "x" : "")));
            break;
        }
        switch (this.selectH) {
          case "binomial":
            if (this.productInputForm.get('hAXBox')?.value && !this.productInputForm.get('hAPowerBox')?.value) {
              this.hTemp += String(this.productInputForm.get('hA')?.value && (this.productInputForm.get('hA')?.value != 1 ? this.productInputForm.get('hA')?.value : "") + "x");
              this.hDerivativeTemp += String(this.productInputForm.get('hA')?.value && this.productInputForm.get('hA')?.value != 1 ? this.productInputForm.get('hA')?.value : 1);
            } else if (this.productInputForm.get('hAXBox')?.value && this.productInputForm.get('hAPowerBox')?.value) {
              if (this.productInputForm.get('hNA')?.value - 1 != 1 && this.productInputForm.get('hNA')?.value - 1 != 0) {
                this.hTemp += String(this.productInputForm.get('hA')?.value + "x<sup>" + this.productInputForm.get('hNA')?.value + "</sup>");
                this.hDerivativeTemp += String(this.productInputForm.get('hNA')?.value * this.productInputForm.get('hA')?.value + "x<sup>" + (this.productInputForm.get('hNA')?.value - 1) + "</sup>");
              } else if (this.productInputForm.get('hNA')?.value - 1 == 1) {
                this.hTemp += String(this.productInputForm.get('hA')?.value + "x<sup>" + this.productInputForm.get('hNA')?.value + "</sup>");
                this.hDerivativeTemp += String(this.productInputForm.get('hNA')?.value * this.productInputForm.get('hA')?.value + "x");
              } else if (this.productInputForm.get('hNA')?.value - 1 == 0) {
                this.hTemp += String(this.productInputForm.get('hA')?.value + "x");
                this.hDerivativeTemp += String(this.productInputForm.get('hA')?.value);
              }
            } else if (!this.productInputForm.get('hAXBox')?.value) {
              this.hTemp += String(this.productInputForm.get('hA')?.value);
              this.hDerivativeTemp += "0";
            }
            this.hTemp += " " + this.operatorH + " ";
            this.hDerivativeTemp += " " + this.operatorH + " ";
            if (this.productInputForm.get('hBXBox')?.value && !this.productInputForm.get('hBPowerBox')?.value) {
              this.hTemp += String(this.productInputForm.get('hB')?.value && (this.productInputForm.get('hB')?.value != 1 ? this.productInputForm.get('hB')?.value : "") + "x");
              this.hDerivativeTemp += String(this.productInputForm.get('hB')?.value && this.productInputForm.get('hB')?.value != 1 ? this.productInputForm.get('hB')?.value : 1);
            } else if (this.productInputForm.get('hBXBox')?.value && this.productInputForm.get('hBPowerBox')?.value) {
              if (this.productInputForm.get('hNB')?.value - 1 != 1 && this.productInputForm.get('hNB')?.value - 1 != 0) {
                this.hTemp += String(this.productInputForm.get('hB')?.value + "x<sup>" + this.productInputForm.get('hNB')?.value + "</sup>");
                this.hDerivativeTemp += String(this.productInputForm.get('hNB')?.value * this.productInputForm.get('hB')?.value + "x<sup>" + (this.productInputForm.get('hNB')?.value - 1) + "</sup>");
              } else if (this.productInputForm.get('hNB')?.value - 1 == 1) {
                this.hTemp += String(this.productInputForm.get('hB')?.value + "x<sup>" + this.productInputForm.get('hNB')?.value + "</sup>");
                this.hDerivativeTemp += String(this.productInputForm.get('hNB')?.value * this.productInputForm.get('hB')?.value + "x");
              } else if (this.productInputForm.get('hNB')?.value - 1 == 0) {
                this.hTemp += String(this.productInputForm.get('hB')?.value + "x");
                this.hDerivativeTemp += String(this.productInputForm.get('hB')?.value);
              }
            } else if (!this.productInputForm.get('hBXBox')?.value) {
              this.hTemp += String(this.productInputForm.get('hB')?.value);
              this.hDerivativeTemp += "0";
            }
            break;
          case "constant":
            this.hTemp = String(this.productInputForm.get('hC')?.value);
            this.hDerivativeTemp = "0";
            break;
          case "constantMultiple":
            this.hTemp = String((this.productInputForm.get('hC')?.value) + " * " + (this.productInputForm.get('hM')?.value ? this.productInputForm.get('hM')?.value : "") + (this.productInputForm.get('hN')?.value != 1 && this.productInputForm.get('hN')?.value != 0 ? "x<sup>" + (this.productInputForm.get('hN')?.value) + "</sup>" : "x"));
            this.hDerivativeTemp = String((this.productInputForm.get('hC')?.value * this.productInputForm.get('hN')?.value * (this.productInputForm.get('hM')?.value ? this.productInputForm.get('hM')?.value : 1)) + (this.productInputForm.get('hN')?.value - 1 != 1 && this.productInputForm.get('hN')?.value - 1 != 0 ? "x<sup>" + (this.productInputForm.get('hN')?.value - 1) + "</sup>" : (this.productInputForm.get('hN')?.value - 1 != 0 ? "x" : "")));
            break;
          case "power":
            this.hTemp = String((this.productInputForm.get('hM')?.value && this.productInputForm.get('hM')?.value != 1 ? this.productInputForm.get('hM')?.value : "") + (this.productInputForm.get('hN')?.value != 1 && this.productInputForm.get('hN')?.value != 0 ? "x<sup>" + (this.productInputForm.get('hN')?.value) + "</sup>" : "x"));
            this.hDerivativeTemp = String(this.productInputForm.get('hN')?.value * (this.productInputForm.get('hM')?.value ? this.productInputForm.get('hM')?.value : 1) + (this.productInputForm.get('hN')?.value - 1 != 1 && this.productInputForm.get('hN')?.value - 1 != 0 ? "x<sup>" + (this.productInputForm.get('hN')?.value - 1) + "</sup>" : (this.productInputForm.get('hN')?.value - 1 != 0 ? "x" : "")));
            break;
        }
        this.calculation += "(" + this.gTemp + ")" + "(" + this.hDerivativeTemp + ")" + " + " + "(" + this.gDerivativeTemp + ")" + "(" + this.hTemp + ")";
        break;
      case "quotient":
        break;
      case "chain":
        break;
    }
    this.showCalculation = true;
  }

  clear() {
    this.calculation = "";
    this.showCalculation = false;
    switch (this.currRule) {
      case "constant":
        break;
      case "constantMultiple":
        break;
      case "power":
        break;
      case "sum":
        break;
      case "difference":
        break;
      case "product":
        break;
      case "quotient":
        break;
      case "chain":
        break;
    }
  }
}
