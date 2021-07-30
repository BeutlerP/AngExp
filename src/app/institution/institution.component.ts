import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';

@Component({
  selector: 'institution',
  templateUrl: './institution.component.html',
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class InstitutionComponent {
  institutionsname: string;
  kurzbezeichnung: string;
  rechtsform: string;
  gruendungsdatum: Date;

  dataForm = this.formBuilder.group({
    institutionsname: 'Musterfirma',
    kurzbezeichnung: 'M.F.',
    rechtsform: 'Einzelunternehmen',
    gruendungsdatum: formatDate('2021-01-02', 'yyyy-MM-dd', 'en')
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.warn('Submitted' + this.dataForm.get('gruendungsdatum').value);
  }
}
