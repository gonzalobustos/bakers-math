import { IParameters } from '@shared/entities';
import { CalculatorPageComponent } from './calculator-page.component';
import { CalculatorService } from '../calculator.service';

describe('CalculatorPageComponent', () => {
  let component: CalculatorPageComponent;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    calculatorService = new CalculatorService();
    component = new CalculatorPageComponent(calculatorService);
  });

  it('sets calculator parameters when parameters form emits an update event', () => {
    jest.spyOn(calculatorService, 'setParameters');

    const parameters: IParameters = {
      doughWeight: 500,
      doughHydration: 70,
      preferment: 20,
      prefermentHydration: 100,
      prefermentFlour: 200,
      salt: 2,
      starterHydration: 100
    };

    component.onUpdate(parameters);

    expect(calculatorService.setParameters).toHaveBeenCalledWith(parameters);
  });

  it('resets calculator formula when parameters form emits a reset event', () => {
    jest.spyOn(calculatorService, 'resetFormula');

    component.onReset();

    expect(calculatorService.resetFormula).toHaveBeenCalled();
  });
});
