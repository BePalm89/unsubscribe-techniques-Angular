import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUnsubscribeBaseComponentComponent } from './auto-unsubscribe-base-component.component';

describe('AutoUnsubscribeBaseComponentComponent', () => {
  let component: AutoUnsubscribeBaseComponentComponent;
  let fixture: ComponentFixture<AutoUnsubscribeBaseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoUnsubscribeBaseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoUnsubscribeBaseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
