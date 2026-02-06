import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  imports: [ReactiveFormsModule],
  templateUrl: './form-component.html',
  styleUrl: './form-component.scss',
})
export class FormComponent {
  beneficiaryForm = new FormGroup({
    name: new FormControl('', Validators.required), //Validation: max 50 chars, non-numeric
    lastName: new FormControl('', Validators.required), //Validation: max 150 chars, non-numeric, allow symbols
    country: new FormControl('', Validators.required), //Validation: min/max 2 chars, capitalised
    bankName: new FormControl('', Validators.required), // Validation: max 35 chars
    bankAccountNumber: new FormControl('', Validators.required), // Validation: max 8 digits, no letters or symbols
    sortCode: new FormControl('', Validators.required), // Validation: max 6 digits OR 8 digits with hyphens in the appropriate place i.e 12-34-56
  });

  onSubmit() {
    if (this.beneficiaryForm.valid) {
      // Explain your strategy for submitting the form to a backend service
    }
  }
}
