import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesDentistaComponent } from './detalhes-dentista.component';

describe('DetalhesDentistaComponent', () => {
  let component: DetalhesDentistaComponent;
  let fixture: ComponentFixture<DetalhesDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
