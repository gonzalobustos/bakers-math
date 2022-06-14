export interface IFormula {
  flourWeight: number;
  prefermentFlourWeight: number;
  prefermentStarterWeight: number;
  prefermentWaterWeight: number;
  saltRatio: number;
  saltWeight: number;
  totalDoughWeight: number;
  totalDoughRatio: number;
  totalFlourRatio: number;
  totalFlourWeight: number;
  totalPrefermentWeight: number;
  totalWaterRatio: number;
  totalWaterWeight: number;
  waterWeight: number;
}

export const DEFAULT_FORMULA: IFormula = {
  flourWeight: 0,
  prefermentFlourWeight: 0,
  prefermentStarterWeight: 0,
  prefermentWaterWeight: 0,
  saltRatio: 0,
  saltWeight: 0,
  totalDoughWeight: 0,
  totalDoughRatio: 0,
  totalFlourRatio: 0,
  totalFlourWeight: 0,
  totalPrefermentWeight: 0,
  totalWaterRatio: 0,
  totalWaterWeight: 0,
  waterWeight: 0,
};
