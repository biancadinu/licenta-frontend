import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IronCalculatorComponent } from './iron-calculator.component';

describe('IronCalculatorComponent', () => {
  let component: IronCalculatorComponent;
  let fixture: ComponentFixture<IronCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IronCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IronCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
