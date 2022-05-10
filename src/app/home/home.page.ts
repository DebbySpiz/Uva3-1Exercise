import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  max: number = 0;
  i: number;
  j: number;


  constructor() { }

  ciclo() {
    for (let m = this.i; m <= this.j; m++) {
  let contatore: number = 1;
  let numero = m;                                            //  fino ad arrivare ad 1
  while (numero != 1) {
    if (numero % 2 == 0) {                                             //Controllo pari
      numero = numero / 2;
    } else {                                                        //In caso esso non sia pari passa all'else 
      numero = 3 * numero + 1;

    }
    contatore++;                                                    //Incremento

  }
  this.max = this.massimo(contatore);

}

  }
massimo(contatore: number):number {                      //Funzione di calcolo lunghezza del ciclo.

  return contatore > this.max ? contatore : this.max;
}

}