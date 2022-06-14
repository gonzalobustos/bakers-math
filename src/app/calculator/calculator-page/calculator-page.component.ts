import { ChangeDetectionStrategy, Component } from '@angular/core';

import { IParameters } from '@shared/entities';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'bm-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorPageComponent {
  formula$ = this.calculator.formula$;

  constructor(
    private calculator: CalculatorService,
  ) { }

  onParametersUpdate({ parameters, valid }: { parameters: IParameters, valid: boolean }) {
    if (valid) {
      this.calculator.setParameters(parameters);
    } else {
      this.calculator.resetFormula();
    }
  }
}
