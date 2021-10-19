import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPsiComponent } from './listagem-psi.component';

describe('ListagemPsiComponent', () => {
  let component: ListagemPsiComponent;
  let fixture: ComponentFixture<ListagemPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
