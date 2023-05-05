import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
input:string='';
result:string='';

pressNum(num:string){
  //dont allow . more than one
if(num=="."){
  if(this.input!=""){
    const lastNum =this.getLastOperand();
    console.log(lastNum.lastIndexOf("."));
    
    if(lastNum.lastIndexOf(".")>=0)
    return;
  }
}

//dont allow 0 beginning
if(num=="0"){
  if(this.input == ""){
    return;
  }
  const previousNum = this.input[this.input.length-1];
  if(previousNum==='/' || previousNum==='*' || previousNum==='-' || previousNum==='+' ){
    return;
  }
}
this.input = this.input +num
this.answer();
}

getLastOperand(){
let pos:number;
console.log(this.input);
pos = this.input.toString().lastIndexOf("+")
if(this.input.toString().lastIndexOf("-")>pos)
pos= this.input.lastIndexOf("-")
if(this.input.toString().lastIndexOf("*")>pos)
pos= this.input.lastIndexOf("*")
if(this.input.toString().lastIndexOf("/")>pos)
pos= this.input.lastIndexOf("/")
console.log('last' +this.input.substr(pos+1));
return this.input.substr(pos+1)



}
pressOperator(op:string){
  const lastKey = this.input[this.input.length-1];
  if(lastKey==='/' || lastKey==='*' || lastKey==='-' || lastKey==='+' ){
    return;
  }
  this.input = this.input+op
  this.answer()
}
clear(){
   if(this.input!=""){
    this.input=this.input.substr(0,this.input.length-1)
   }
}
allClear(){
  this.input ="";
  this.result = "";
}
answer(){
  let formula = this.input;
  let lastKey = formula[formula.length-1];
  if(lastKey==="."){
    formula=formula.substr(0,formula.length-1)
  }
  lastKey = formula[formula.length-1];
  if(lastKey==="/" || lastKey==="*" || lastKey==="-" || lastKey==="+" || lastKey==="." ){
  formula=formula.substr(0,formula.length-1)
  }
  console.log('formula' +formula);
  this.result = eval(formula);
  
}
getAnswer(){
  this.answer();
  //this.input= this.result;
  if(this.input=="0")
  this.input = ""
}
}
