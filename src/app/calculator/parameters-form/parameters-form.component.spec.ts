import { fakeAsync, tick } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { ParametersFormComponent } from './parameters-form.component';

describe('ParametersFormComponent', () => {
  let component: ParametersFormComponent;

  beforeEach(() => {
    const formBuilder = new FormBuilder();
    component = new ParametersFormComponent(formBuilder);
  });

  describe('when a form value changes', () => {
    beforeEach(() => {
      jest.spyOn(component.reset, 'emit');
      jest.spyOn(component.update, 'emit');

      component.ngOnInit();
    });

    it('emits an update event if all values are valid', fakeAsync(() => {
      const parameters = {
        doughWeight: '500',
        doughHydration: '70',
        preferment: '20',
        prefermentHydration: '100',
        prefermentFlour: '200',
        salt: '2',
        starterHydration: '100'
      };

      component.form.setValue(parameters);

      tick();

      expect(component.update.emit).toHaveBeenCalledWith(parameters);
      expect(component.reset.emit).not.toHaveBeenCalled();
    }));

    it('emits a reset event if any value is not valid', fakeAsync(() => {
      const parameters = {
        doughWeight: '500',
        doughHydration: '',
        preferment: '20',
        prefermentHydration: '100',
        prefermentFlour: '200',
        salt: '2',
        starterHydration: '100'
      };

      component.form.setValue(parameters);

      tick();

      expect(component.reset.emit).toHaveBeenCalled();
      expect(component.update.emit).not.toHaveBeenCalled();
    }));
  });

  it('sends a value to the destroyed$ observable when component is destroyed', () => {
    jest.spyOn(component.destroyed$, 'next');
    jest.spyOn(component.destroyed$, 'complete');

    component.ngOnDestroy();

    expect(component.destroyed$.next).toHaveBeenCalled();
    expect(component.destroyed$.complete).toHaveBeenCalled();
  });
});
