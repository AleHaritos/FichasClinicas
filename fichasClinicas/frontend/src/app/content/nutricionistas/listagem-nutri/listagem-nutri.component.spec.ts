import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemNutriComponent } from './listagem-nutri.component';

describe('ListagemNutriComponent', () => {
  let component: ListagemNutriComponent;
  let fixture: ComponentFixture<ListagemNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
