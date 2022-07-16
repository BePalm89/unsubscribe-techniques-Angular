import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolierplateComponent } from './bolierplate.component';

describe('BolierplateComponent', () => {
  let component: BolierplateComponent;
  let fixture: ComponentFixture<BolierplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolierplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolierplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
