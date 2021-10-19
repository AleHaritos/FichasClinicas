import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativarDentistaComponent } from './reativar-dentista.component';

describe('ReativarDentistaComponent', () => {
  let component: ReativarDentistaComponent;
  let fixture: ComponentFixture<ReativarDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativarDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
