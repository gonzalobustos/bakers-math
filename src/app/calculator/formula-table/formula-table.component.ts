import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IFormula } from '@shared/entities';

@Component({
  selector: 'bm-formula-table',
  templateUrl: './formula-table.component.html',
  styleUrls: ['./formula-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormulaTableComponent {
  @Input() formula!: IFormula;
}
