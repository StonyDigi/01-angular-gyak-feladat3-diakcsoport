import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiakcsoportComponent } from './diakcsoport.component';

describe('DiakcsoportComponent', () => {
  let component: DiakcsoportComponent;
  let fixture: ComponentFixture<DiakcsoportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiakcsoportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiakcsoportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
