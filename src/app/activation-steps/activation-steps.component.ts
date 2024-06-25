import { Component, Input } from '@angular/core';
import { ActivationStep } from '../interfaces/data-response';
import { DatePipe, NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-activation-steps',
  standalone: true,
  imports: [NgClass, NgFor],
  providers: [DatePipe],
  templateUrl: './activation-steps.component.html',
  styleUrl: './activation-steps.component.scss',
})
export class ActivationStepsComponent {
  @Input() activationSteps: ActivationStep[] | undefined = [];

  constructor(private datePipe: DatePipe) {}

  /**
   * Formats a given date string into 'hh:mm a' format.
   * Returns an empty string if the date string is invalid.
   * @param date - Date string to format
   * @returns Formatted date string or empty string if invalid
   */
  formatDate(date: string) {
    const formattedDate = new Date(date);
    if (isNaN(formattedDate.getTime())) {
      return ''; // Return blank if date is not valid
    }
    return this.datePipe.transform(formattedDate, 'hh:mm a') || ''; // Format date using DatePipe
  }
}
