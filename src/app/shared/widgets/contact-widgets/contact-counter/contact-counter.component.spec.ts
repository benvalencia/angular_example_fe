import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCounterComponent } from './contact-counter.component';

describe('ContactCounterComponent', () => {
  let component: ContactCounterComponent;
  let fixture: ComponentFixture<ContactCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
