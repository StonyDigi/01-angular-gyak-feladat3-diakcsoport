// diak.model.ts

export interface Diak {
    nev: string;
    magassag: number;
    suly: number;
  }
  
  // Diak osztály implementálása az interfésszel
  export class DiakModel implements Diak {
    nev: string;
    magassag: number;
    suly: number;
  
    constructor(nev: string, magassag: number, suly: number) {
      this.nev = nev;
      this.magassag = magassag;
      this.suly = suly;
    }
  }