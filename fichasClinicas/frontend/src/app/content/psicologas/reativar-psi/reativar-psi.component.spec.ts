import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarPsiComponent } from './reativar-psi.component';

describe('ReativarPsiComponent', () => {
  let component: ReativarPsiComponent;
  let fixture: ComponentFixture<ReativarPsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarPsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarPsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
