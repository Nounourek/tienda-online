import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MAT_DATE_LOCALE } from '@angular/material/core'; // Importar MAT_DATE_LOCALE
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { LOCALE_ID } from '@angular/core'; // Importar LOCALE_ID

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Establecer el locale en español
    { provide: LOCALE_ID, useValue: 'es-ES' } // Establecer el locale global a español
  ]
})
export class CalendarComponent {
  selectedDate: Date | null = null;
  highlightedDates: Date[] = [new Date(2025, 0, 25), new Date(2025, 0, 28)];

  onDateChange(event: any): void {
    this.selectedDate = event;
    console.log('Selected Date:', this.selectedDate);
  }

  dateClass = (date: Date): string => {
    const isHighlighted = this.highlightedDates.some(d => d.getDate() === date.getDate() &&
      d.getMonth() === date.getMonth() &&
      d.getFullYear() === date.getFullYear());
    
    if (isHighlighted) {
      return 'highlighted-date';
    }

    if (date.getDay() === 0 || date.getDay() === 6) {
      return 'mat-calendar-body-disabled';
    }

    return '';
  };
}
