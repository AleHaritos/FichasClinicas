import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroPsiComponent } from './cadastro-psi.component';

describe('CadastroPsiComponent', () => {
  let component: CadastroPsiComponent;
  let fixture: ComponentFixture<CadastroPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
