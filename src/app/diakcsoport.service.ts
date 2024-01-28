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
}
