import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNutriComponent } from './cadastro-nutri.component';

describe('CadastroNutriComponent', () => {
  let component: CadastroNutriComponent;
  let fixture: ComponentFixture<CadastroNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
