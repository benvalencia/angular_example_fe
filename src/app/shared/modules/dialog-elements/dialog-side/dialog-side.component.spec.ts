import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSideComponent } from './dialog-side.component';

describe('DialogSideComponent', () => {
  let component: DialogSideComponent;
  let fixture: ComponentFixture<DialogSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
