import { Component } from '@angular/core';

@Component({
  selector: 'app-uva136',
  templateUrl: './uva136.page.html',
  styleUrls: ['./uva136.page.scss'],
})
export class Uva136Page  {

  n:number;
  risultato:number = 0;

   constructor() { }
    isUngly(n:number) {                                     //Funzione che verifica se il numero è divisile per 2-3-5 ritorna vero se è divisibile 
     while(n !== 1){                                          //falso se non lo è
               if(n % 2 == 0){
            n /= 2;
         } else if(n % 3 == 0) {
            n /= 3;
         } else if(n % 5 == 0) {
               n /= 5;
         } else {
            return false;
         }
      }
      return true;
   }
 
   getUgly(n:number):void{                                        //funzione che richiama la precedente e ne trova la posizione 
     let i=1;
   let conta=1;
   while (n > conta){
     i++;
     if (this.isUngly(i))
     conta++;
   }this.risultato=i;
 }
   ngOnInit() {
   }
  }

