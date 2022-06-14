import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { IParameters } from '@shared/entities';

@Component({
  selector: 'bm-parameters-form',
  templateUrl: './parameters-form.component.html',
  styleUrls: ['./parameters-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParametersFormComponent {
  @Output() update = new EventEmitter<{ parameters: IParameters, valid: boolean }>();

  form = this.formBuilder.group(
    {
      doughWeight: ['', [Validators.required]],
      doughHydration: ['', [Validators.required]],
      preferment: ['', [Validators.required]],
      prefermentHydration: ['', []],
      prefermentFlour: ['', []],
      salt: ['', [Validators.required]],
      starterHydration: ['', []],
    },
    { updateOn: 'blur' }
  );
  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe((parameters) => {
      this.update.emit({ parameters, valid: this.form.valid });
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  get doughHydration() {
    return this.form.get('doughHydration')!;
  }

  get doughWeight() {
    return this.form.get('doughWeight')!;
  }

  get preferment() {
    return this.form.get('preferment')!;
  }

  get prefermentHydration() {
    return this.form.get('prefermentHydration')!;
  }

  get prefermentFlour() {
    return this.form.get('prefermentFlour')!;
  }

  get salt() {
    return this.form.get('salt')!;
  }

  get starterHydration() {
    return this.form.get('starterHydration')!;
  }
}
