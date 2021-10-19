import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNutriComponent } from './delete-nutri.component';

describe('DeleteNutriComponent', () => {
  let component: DeleteNutriComponent;
  let fixture: ComponentFixture<DeleteNutriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNutriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteNutriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
