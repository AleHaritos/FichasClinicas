import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesNutriComponent } from './detalhes-nutri.component';

describe('DetalhesNutriComponent', () => {
  let component: DetalhesNutriComponent;
  let fixture: ComponentFixture<DetalhesNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
