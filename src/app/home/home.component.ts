import { Component, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';
import { DataResponse } from '../interfaces/data-response';
import { NgIf } from '@angular/common';
import { UnicornInboxComponent } from '../unicorn-inbox/unicorn-inbox.component';
import { XRayTriggerComponent } from '../x-ray-trigger/x-ray-trigger.component';
import { ActivationStepsComponent } from '../activation-steps/activation-steps.component';
import { TopAnalyticCardsComponent } from '../top-analytic-cards/top-analytic-cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf, TopAnalyticCardsComponent, ActivationStepsComponent, XRayTriggerComponent, UnicornInboxComponent],
  providers: [DashboardDataService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: DataResponse | null = null; // Initialize data as null initially

  constructor(
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
    this.dashboardDataService.getData().subscribe({
      next: (data) => {
        this.data = data; // Update data on successful API response
      },
      error: (error) => {
        console.log('Error :', error.message); // Log error message to console
      },
    });
  }
}
