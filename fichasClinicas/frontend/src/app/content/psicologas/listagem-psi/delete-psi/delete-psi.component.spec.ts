import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePsiComponent } from './delete-psi.component';

describe('DeletePsiComponent', () => {
  let component: DeletePsiComponent;
  let fixture: ComponentFixture<DeletePsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletePsiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
