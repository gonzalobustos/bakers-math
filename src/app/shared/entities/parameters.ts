export interface IParameters {
  doughWeight: number;
  doughHydration: number;
  preferment: number;
  prefermentHydration: number;
  prefermentFlour: number;
  salt: number;
  starterHydration: number;
}

export const DEFAULT_PARAMETERS: IParameters = {
  doughWeight: 0,
  doughHydration: 0,
  preferment: 0,
  prefermentHydration: 100,
  prefermentFlour: 200,
  salt: 0,
  starterHydration: 100
};
