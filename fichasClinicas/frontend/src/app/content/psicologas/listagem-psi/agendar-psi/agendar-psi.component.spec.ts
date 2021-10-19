import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarPsiComponent } from './agendar-psi.component';

describe('AgendarPsiComponent', () => {
  let component: AgendarPsiComponent;
  let fixture: ComponentFixture<AgendarPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendarPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
