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

  constructor(private diakcsoportService: DiakcsoportService) {}
  
  ngOnInit(): void {
    this.diakok = this.diakcsoportService.getDiakok();
    this.legmagasabbDiak = this.diakcsoportService.legmagasabbDiak();
  }
  
}
