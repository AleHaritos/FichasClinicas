import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarPComponent } from './reativar-p.component';

describe('ReativarPComponent', () => {
  let component: ReativarPComponent;
  let fixture: ComponentFixture<ReativarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
