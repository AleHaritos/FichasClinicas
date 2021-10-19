import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologasComponent } from './psicologas.component';

describe('PsicologasComponent', () => {
  let component: PsicologasComponent;
  let fixture: ComponentFixture<PsicologasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsicologasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsicologasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
