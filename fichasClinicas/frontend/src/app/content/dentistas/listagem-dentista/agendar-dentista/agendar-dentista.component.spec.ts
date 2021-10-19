import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarDentistaComponent } from './agendar-dentista.component';

describe('AgendarDentistaComponent', () => {
  let component: AgendarDentistaComponent;
  let fixture: ComponentFixture<AgendarDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
