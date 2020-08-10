import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  a: number;
  b: number;
  c: number;
  operator = "+";

  constructor() { }

  ngOnInit(): void {
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.c = this.a + this.b;
        break;
      case '-':
        this.c = this.a - this.b;
        break;
      case '*':
        this.c = this.a * this.b;
        break;
      case '/':
        this.c = this.a / this.b;
        break;
    }
  }
}
