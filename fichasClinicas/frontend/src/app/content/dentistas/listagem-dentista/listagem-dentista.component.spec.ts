import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemDentistaComponent } from './listagem-dentista.component';

describe('ListagemDentistaComponent', () => {
  let component: ListagemDentistaComponent;
  let fixture: ComponentFixture<ListagemDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
