import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarComponent } from './reativar.component';

describe('ReativarComponent', () => {
  let component: ReativarComponent;
  let fixture: ComponentFixture<ReativarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
