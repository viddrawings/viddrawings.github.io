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

  get showBusinessVelden(): boolean {
    const type = this.form.get('standType')?.value;
    return type !== 'kleine-ondernemer';
  }

  get estimatedCost(): number {
    const {standType, stoelen, extraTickets, stroom} = this.form.value;

    let totaal = 0;

    switch (standType) {
      case 'standaard':
        totaal += 75;
        break;
      case 'kleine-ondernemer':
        totaal += 30;
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
      standType: ['standaard', Validators.required],
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
