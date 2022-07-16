import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UntilDestroyDecoratorComponent } from './until-destroy-decorator.component';

describe('UntilDestroyDecoratorComponent', () => {
  let component: UntilDestroyDecoratorComponent;
  let fixture: ComponentFixture<UntilDestroyDecoratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UntilDestroyDecoratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UntilDestroyDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
