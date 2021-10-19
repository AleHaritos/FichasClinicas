import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesPsiComponent } from './detalhes-psi.component';

describe('DetalhesPsiComponent', () => {
  let component: DetalhesPsiComponent;
  let fixture: ComponentFixture<DetalhesPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
