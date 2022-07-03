import { ChangeDetectionStrategy, Component } from '@angular/core';
import { startWith } from 'rxjs';

import { DEFAULT_FORMULA, IParameters } from '@shared/entities';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'bm-calculator-page',
  templateUrl: './calculator-page.component.html',
  styleUrls: ['./calculator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorPageComponent {
  formula$ = this.calculator.formula$.pipe(startWith(DEFAULT_FORMULA));

  constructor(
    private calculator: CalculatorService,
  ) { }

  onUpdate(parameters: IParameters) {
    this.calculator.setParameters(parameters);
  }

  onReset() {
    this.calculator.resetFormula();
  }
}
