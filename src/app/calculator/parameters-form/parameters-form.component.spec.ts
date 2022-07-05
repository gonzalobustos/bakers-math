import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametersFormComponent } from './parameters-form.component';

describe('ParametersFormComponent', () => {
  let component: ParametersFormComponent;
  let fixture: ComponentFixture<ParametersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametersFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
