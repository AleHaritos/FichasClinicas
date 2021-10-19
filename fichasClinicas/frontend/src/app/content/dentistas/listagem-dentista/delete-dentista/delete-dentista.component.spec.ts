import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDentistaComponent } from './delete-dentista.component';

describe('DeleteDentistaComponent', () => {
  let component: DeleteDentistaComponent;
  let fixture: ComponentFixture<DeleteDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDentistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
