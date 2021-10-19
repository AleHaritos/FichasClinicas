import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarNutriComponent } from './reativar-nutri.component';

describe('ReativarNutriComponent', () => {
  let component: ReativarNutriComponent;
  let fixture: ComponentFixture<ReativarNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
