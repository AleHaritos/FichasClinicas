import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarNutriComponent } from './agendar-nutri.component';

describe('AgendarNutriComponent', () => {
  let component: AgendarNutriComponent;
  let fixture: ComponentFixture<AgendarNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
