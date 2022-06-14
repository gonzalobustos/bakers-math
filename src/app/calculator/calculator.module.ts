import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CalculatorRoutingModule } from './calculator-routing.module';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { ParametersFormComponent } from './parameters-form/parameters-form.component';
import { FormulaTableComponent } from './formula-table/formula-table.component';

@NgModule({
  declarations: [
    CalculatorPageComponent,
    ParametersFormComponent,
    FormulaTableComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalculatorRoutingModule,
  ],
})
export class CalculatorModule { }
