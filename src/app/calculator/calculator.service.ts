import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, Subject } from 'rxjs';

import { IFormula, IParameters, DEFAULT_PARAMETERS, DEFAULT_FORMULA } from '@shared/entities';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private parameters = new Subject<IParameters>();
  private reset = new Subject<boolean>();

  constructor() { }

  get formula$(): Observable<IFormula> {
    return combineLatest([
    this.parameters,
    this.reset
  ]).pipe(
    map(([parameters, reset]: [IParameters, boolean]) => {
      if (reset || parameters == DEFAULT_PARAMETERS) return DEFAULT_FORMULA;

      return this.calculateFormula(parameters);
    })
  )}

  private calculateFormula(parameters: IParameters): IFormula {
    const {
      doughWeight: totalDoughWeight,
      doughHydration,
      preferment,
      salt,
    } = parameters;
    const prefermentHydration = parameters.prefermentHydration || DEFAULT_PARAMETERS.prefermentHydration
    const prefermentFlour = parameters.prefermentFlour || DEFAULT_PARAMETERS.prefermentFlour
    const starterHydration = parameters.starterHydration || DEFAULT_PARAMETERS.starterHydration

    const totalFlourRatio = 1;
    const totalWaterRatio = doughHydration / 100;
    const prefermentRatio = preferment / 100;
    const prefermentFlourRatio = prefermentFlour / 100;
    const prefermentWaterRatio = prefermentHydration / 100;
    const saltRatio = salt / 100;
    const starterWaterRatio = starterHydration / 100;
    const totalDoughRatio = totalFlourRatio + totalWaterRatio + saltRatio;

    let totalFlourWeight = totalDoughWeight / totalDoughRatio;
    let totalWaterWeight = totalFlourWeight * totalWaterRatio;

    const prefermentWeight = totalFlourWeight * prefermentRatio + totalFlourWeight * prefermentRatio * prefermentWaterRatio;
    const prefermentFlourWeight = prefermentWeight / (1 + prefermentWaterRatio) - prefermentWeight / (1 + prefermentWaterRatio) / (1 + prefermentFlourRatio);
    const prefermentStarterFlourWeight = prefermentFlourWeight / prefermentFlourRatio;
    const prefermentStarterWaterWeight = prefermentStarterFlourWeight * starterWaterRatio;
    const prefermentStarterWeight = prefermentStarterFlourWeight + prefermentStarterWaterWeight;
    const prefermentWaterWeight = prefermentWeight - prefermentFlourWeight - prefermentStarterWeight;
    const totalPrefermentWeight = prefermentFlourWeight + prefermentStarterWeight + prefermentWaterWeight;

    const saltWeight = totalFlourWeight * saltRatio;
    const flourWeight = totalFlourWeight - prefermentFlourWeight - prefermentStarterFlourWeight;
    const waterWeight = totalWaterWeight - prefermentWaterWeight - prefermentStarterWaterWeight;

    return {
      flourWeight,
      prefermentFlourWeight,
      prefermentStarterWeight,
      prefermentWaterWeight,
      saltRatio,
      saltWeight,
      totalDoughWeight,
      totalDoughRatio,
      totalFlourRatio,
      totalFlourWeight,
      totalPrefermentWeight,
      totalWaterRatio,
      totalWaterWeight,
      waterWeight,
    };
  }

  resetFormula(): void {
    this.reset.next(true);
    this.parameters.next(DEFAULT_PARAMETERS);
  }

  setParameters(parameters: IParameters): void {
    this.reset.next(false);
    this.parameters.next(parameters);
  }
}
