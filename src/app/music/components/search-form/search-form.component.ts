import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInput } from '@angular/material/input';
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  withLatestFrom,
} from 'rxjs';

MatInput;

type MarketFormType = FormGroup<{
  code: FormControl<string | null>;
}>;

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();
  openAdvanced = false;

  @Input() set query(query: string | null) {
    this.searchForm.get('query')?.setValue(query || '', {
      emitEvent: false,
    });
  }

  constructor(private bob: NonNullableFormBuilder) {
    const field = this.searchForm.get('query')!;
    const valueChanges = field.valueChanges;
    const statusChanges = field.statusChanges;

    const searchChanges = statusChanges.pipe(
      // combine last value
      withLatestFrom(valueChanges),
      // only VALID
      filter(([status, value]) => status === 'VALID'),
      // just value
      map(([status, value]) => value),
      // wait
      debounceTime(500),
      // no duplicates
      distinctUntilChanged()
    );

    searchChanges.subscribe(this.search);
  }

  asyncCensor: AsyncValidatorFn = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const obs = new Observable<ValidationErrors | null>((subscriber) => {
      // console.log('on Subscribe');

      const handle = setTimeout(() => {
        const badword = 'batman';
        const ErrorCode = {
          censor: { badword },
        };
        const result = String(control.value).includes(badword)
          ? ErrorCode
          : null;

        // console.log('next', result);

        subscriber.next(result);
        subscriber.complete();
      }, 1000);

      return () => {
        // console.log('Unsubscribe / COmplete');

        clearTimeout(handle);
      };
    });

    return obs;
  };

  searchForm = this.bob.group({
    query: this.bob.control(this.query || '', {
      validators: [Validators.required, Validators.minLength(3)],
      asyncValidators: [this.asyncCensor],
    }),
    advanced: this.bob.group({
      type: ['album'],
      markets: this.bob.array([
        this.bob.group({
          code: this.bob.control('PL'),
        }),
      ]),
    }),
  });

  markets = this.searchForm.get([
    'advanced',
    'markets',
  ]) as FormArray<MarketFormType>;

  addMarket() {
    this.markets.push(
      new FormGroup({
        code: new FormControl(''),
      })
    );

    // this.searchForm.reset({})
  }

  submit() {
    const value = this.searchForm.get('query')?.value;
    this.search.emit(value);
  }
}
