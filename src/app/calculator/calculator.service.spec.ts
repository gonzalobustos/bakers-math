import { DEFAULT_FORMULA } from '@shared/entities';
import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    service = new CalculatorService();
  });

  it('calculates a new formula when parameters change', (done) => {
    service.formula$.subscribe(formula => {
      expect(formula.flourWeight).toBeCloseTo(465.12);
      expect(formula.prefermentFlourWeight).toBeCloseTo(93.02);
      expect(formula.prefermentStarterWeight).toBeCloseTo(46.51);
      expect(formula.prefermentWaterWeight).toBeCloseTo(93.02);
      expect(formula.saltRatio).toBe(0.02);
      expect(formula.saltWeight).toBeCloseTo(11.63);
      expect(formula.totalDoughWeight).toBe(1000);
      expect(formula.totalDoughRatio).toBe(1.72);
      expect(formula.totalFlourRatio).toBe(1);
      expect(formula.totalFlourWeight).toBeCloseTo(581.4);
      expect(formula.totalPrefermentWeight).toBeCloseTo(232.56);
      expect(formula.totalWaterRatio).toBe(0.7);
      expect(formula.totalWaterWeight).toBeCloseTo(406.98);
      expect(formula.waterWeight).toBeCloseTo(290.7);

      done();
    });

    service.setParameters({
      doughWeight: 1000,
      doughHydration: 70,
      preferment: 20,
      prefermentHydration: 100,
      prefermentFlour: 400,
      salt: 2,
      starterHydration: 100
    });
  });

  it('returns the default formula when parameters are reset', (done) => {
    service.formula$.subscribe(formula => {
      expect(formula).toBe(DEFAULT_FORMULA);

      done();
    });

    service.resetFormula();
  });
});
