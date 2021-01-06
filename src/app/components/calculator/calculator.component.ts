import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  result:number;
  firstNum:string="";
  secondNum:string="";
  operator:string="";

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.result = null;
    this.firstNum ='';
    this.secondNum ='';
    this.operator ='';
  }

  addOperator(operator){
    this.operator = operator;
  }

  add(number){
    if(this.operator ==""){
      this.firstNum +=number;
    }else{
      this.secondNum +=number;
    }

  }

  summary(){
    if(this.firstNum!="" && this.secondNum!=""){
      switch(this.operator){
        case "+":
          this.result=  Number(this.firstNum)+ Number(this.secondNum);
          break;
          case "-":
          this.result=  Number(this.firstNum)- Number(this.secondNum);
          break;
          case "*":
          this.result=  Number(this.firstNum)* Number(this.secondNum);
          break;
          case "/":
          this.result=  Number(this.firstNum)/ Number(this.secondNum);
          break;
      }
    }
  }

}
