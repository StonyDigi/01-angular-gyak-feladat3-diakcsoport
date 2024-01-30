// src/app/diakcsoport.service.ts

import { Injectable } from '@angular/core';
import { Diak } from '../app/diakcsoport/diak.model';

@Injectable({
  providedIn: 'root',
})
export class DiakcsoportService {
  private diakok: Diak[] = [
    { nev: 'Teszt Elek', magassag: 180, suly: 80 },
    { nev: 'Gipsz Jakab', magassag: 175, suly: 81 },
    { nev: 'Kovács Kázmér', magassag: 190, suly: 99 },
    { nev: 'Liszt Elek', magassag: 169, suly: 70 },
    { nev: 'Nap Pali', magassag: 190, suly: 89 },
    { nev: 'Kukor Ica', magassag: 160, suly: 70 },
  ];

  // Getter a diákokhoz
  getDiakok(): Diak[] {
    return this.diakok;
  }

  /*

a. Ki a legmagasabb a csoportban?
b. Mennyi az átlag magasság?
c. Ki a legsoványabb a csoportban?
d. Kérjünk be egy nevet, majd írjuk ki az adatait (ha nincs ilyen diák, akkor arról is
adjunk tájékoztatást)!
e. Kérjünk be egy magasságot, majd listázzuk a legalább ilyen magas diákokat!
  
  */

  legmagasabbDiak(): Diak {
    return this.diakok.reduce((legmagasabb, diak) => 
      diak.magassag > legmagasabb.magassag ? diak : legmagasabb, this.diakok[0]);
  }

  atlagMagassag(): number {
    const sumMagassag = this.diakok.reduce((sum, diak) => sum + diak.magassag, 0);
    return sumMagassag / this.diakok.length;
  }

  legsovanyabbDiak(): Diak {
    return this.diakok.reduce((legsovanyabb, diak) => diak.suly < legsovanyabb.suly ? diak : legsovanyabb, this.diakok[0]);
  }

  keresNevAlapjan(nev: string): Diak | undefined {
    return this.diakok.find(diak => diak.nev === nev);
  }

  keresMagassagAlapjan(magassag: number): Diak[] {
    return this.diakok.filter(diak => diak.magassag >= magassag);
  }
  

}
