import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDentistaComponent } from './cadastro-dentista.component';

describe('CadastroDentistaComponent', () => {
  let component: CadastroDentistaComponent;
  let fixture: ComponentFixture<CadastroDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
