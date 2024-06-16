import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';
import { DataResponse, XRaysTrigger } from '../interfaces/data-response';
import { CommonModule, DatePipe, NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, NgClass],
  providers: [DatePipe, DashboardDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: DataResponse | null = null; // Initialize data as null initially
  loading = false; // Boolean flag to indicate loading state

  constructor(
    private datePipe: DatePipe,
    private dashboardDataService: DashboardDataService
  ) {}

  ngOnInit(): void {
    // Fetch initial data when component initializes
    this.getData();
  }

  /**
   * Fetches data from the service and updates component state accordingly.
   * Handles loading state and error logging.
   */
  getData() {
    this.loading = true; // Set loading flag to true while fetching data
    this.dashboardDataService.getData().subscribe({
      next: (data) => {
        this.data = data; // Update data on successful API response
        this.loading = false; // Set loading flag to false after data is fetched
      },
      error: (error) => {
        console.log('Error :', error.message); // Log error message to console
        this.loading = false; // Set loading flag to false on error
      },
    });
  }

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

  /**
   * Toggles the isChecked property of a trigger object.
   * @param trigger The XRaysTrigger object to toggle.
   */
  toggleChecked(trigger: XRaysTrigger) {
    trigger.isChecked = !trigger.isChecked;
  }
}
