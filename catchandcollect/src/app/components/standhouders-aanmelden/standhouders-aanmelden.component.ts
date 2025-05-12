import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-standhouders-aanmelden',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  templateUrl: './standhouders-aanmelden.component.html',
  styleUrl: './standhouders-aanmelden.component.scss'
})
export class StandhoudersAanmeldenComponent {
  loading = false;
  success = false;
  error = false;

  form: FormGroup;

  get showBusinessFields(): boolean {
    return this.form.get('standType')?.value !== 'kleine-ondernemer';
  }

  get vipFields(): boolean {
    return this.form.get('standType')?.value === 'vip';
  }

  get smallBusinessFields(): boolean {
    return this.form.get('standType')?.value === 'kleine-ondernemer';
  }

  get standardFields(): boolean {
    return this.form.get('standType')?.value === 'standaard';
  }

  get estimatedCost(): number {
    const {standType, stoelen, extraTickets, stroom} = this.form.value;
    const standCount = this.form.get('standCount')?.value;

    let totaal = 0;

    switch (standType) {
      case 'standaard':
        totaal += 75 * standCount;
        break;
      case 'kleine-ondernemer':
        const standCountInt = standCount !== '1' ? 0.5 : 1;
        totaal += 45 * standCountInt;
        break;
      case 'vip':
        totaal += 500;
        break;
    }

    // Extra options
    totaal += (stoelen || 0) * 5;
    totaal += (extraTickets || 0) * 10;
    if (stroom) totaal += 20;

    return totaal;
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      contactpersoon: ['', Validators.required],
      bedrijfsnaam: [''],
      kvk: ['', [Validators.pattern(/^\d{8}$/)]],
      email: ['', [Validators.required, Validators.email]],
      telefoon: ['', Validators.required],
      adres: ['', Validators.required],
      btwNummer: ['', [Validators.pattern(/^[A-Z]{2}\d{9}$/)]],
      standType: ['standaard'],
      standCount: ['1'],
      stoelen: [0, [Validators.min(0)]],
      extraTickets: [0, [Validators.min(0)]],
      stroom: [false],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.success = false;
    this.error = false;

    this.http.post('http://localhost:3000/aanmelden', this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.snackBar.open('Aanmelding succesvol verzonden!', 'Sluiten', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
        this.form.reset({
          standType: 'standaard',
          stoelen: 0,
          extraTickets: 0,
          stroom: false,
        });
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
        this.error = true;
        this.snackBar.open('Er is iets misgegaan. Probeer het opnieuw.', 'Sluiten', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      },
    });
  }
}
