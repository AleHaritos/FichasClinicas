import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarDComponent } from './reativar-d.component';

describe('ReativarDComponent', () => {
  let component: ReativarDComponent;
  let fixture: ComponentFixture<ReativarDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
