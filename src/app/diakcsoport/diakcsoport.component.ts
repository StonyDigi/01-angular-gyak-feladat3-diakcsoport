import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Diak } from './diak.model';
import { DiakcsoportService } from '../diakcsoport.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-diakcsoport',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './diakcsoport.component.html',
  styleUrl: './diakcsoport.component.css'
})
export class DiakcsoportComponent implements OnInit {
  diakok: Diak[] = [];
  legmagasabbDiak: Diak | undefined;
  atlagMagassag: number | undefined;
  legsovanyabbDiak: Diak | undefined;
  keresettNev: string = '';
  keresettDiak: Diak | undefined;
  keresettMagassag: number | undefined;
  magasDiakok: Diak[] = [];

  constructor(private diakcsoportService: DiakcsoportService) {}
  
  ngOnInit(): void {
    this.diakok = this.diakcsoportService.getDiakok();
    this.legmagasabbDiak = this.diakcsoportService.legmagasabbDiak();
    this.atlagMagassag = this.diakcsoportService.atlagMagassag();
    this.legsovanyabbDiak = this.diakcsoportService.legsovanyabbDiak();
  }

  keresesNevAlapjan(): void {
    this.keresettDiak = this.diakcsoportService.keresNevAlapjan(this.keresettNev);
  }

  keresesMagassagAlapjan(): void {
    this.magasDiakok = this.diakcsoportService.keresMagassagAlapjan(this.keresettMagassag || 0);
  }
  
}
