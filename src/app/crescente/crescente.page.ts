import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crescente',
  templateUrl: './crescente.page.html',
  styleUrls: ['./crescente.page.scss'],
})
export class CrescentePage{

 a:number;
 b:number;
 c:number;
 d:number;
 e:number;

 array:number [] = [];
stringaArray : string;
stringaArray2 : string;
  constructor() { }
   
 pushToArray(){
  this.array.push(this.a);
  this.array.push(this.b);
  this.array.push(this.c);
  this.array.push(this.d);
  this.array.push(this.e);
  
}


ordinaArray(array:number[]) {
    for (let i=0; i<array.length -1; i++) {
        let crescente:number = i;
        for (let k=i+1; k<array.length; k++)
           if (array[k] <= array[crescente])
              crescente = k;
        let b = array[crescente];
        array[crescente] = array[i];
        array[i] = b;
     }
     return array;
     
    }

    decrescente(array:number[]) {
      for (let i=0; i<array.length -1; i++) {
          let decrescente:number = i;
          for (let k=i+1; k<array.length; k++)
             if (array[k] >= array[decrescente])
                decrescente = k;
          let b = array[decrescente];
          array[decrescente] = array[i];
          array[i] = b;
       }
       return array;
       
      }
messaggio(){
this.stringaArray = "Array ordinato in modo crescente: " + this.ordinaArray(this.array);
}
messaggio2(){
  this.stringaArray = "Array ordinato in modo decrescente: " + this.decrescente(this.array);
  }
  }

  

  
