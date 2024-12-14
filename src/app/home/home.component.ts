import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';
import {
  ActivationStep,
  DataResponse,
  Inbox,
  TopAnalyticsCards,
  XRaysTrigger,
} from '../interfaces/data-response';
import { CommonModule, NgIf } from '@angular/common';
import { UnicornInboxComponent } from '../unicorn-inbox/unicorn-inbox.component';
import { XRayTriggerComponent } from '../x-ray-trigger/x-ray-trigger.component';
import { ActivationStepsComponent } from '../activation-steps/activation-steps.component';
import { TopAnalyticCardsComponent } from '../top-analytic-cards/top-analytic-cards.component';
import { Observable, Subscription, map, shareReplay, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    TopAnalyticCardsComponent,
    ActivationStepsComponent,
    XRayTriggerComponent,
    UnicornInboxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  //data: DataResponse | null = null; // Initialize data as null initially
  data$: Observable<DataResponse | null>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  
  //data: Observable<DataResponse | undefined>;
  top_analytics_cards: TopAnalyticsCards | undefined;
  activation_steps: ActivationStep[] | [] = [];
  x_rays_triggers: XRaysTrigger[] | [] = [];
  inbox_list: Inbox[] | [] = [];
  

  private subscription: Subscription | undefined;

  constructor(private dashboardDataService: DashboardDataService) {
    //this.data = new Observable<DataResponse>();
    this.data$ = this.dashboardDataService.dashboardData$;
    this.loading$ = this.dashboardDataService.loading$;
    this.error$ = this.dashboardDataService.error$;
  }

  ngOnInit(): void {
    // Fetch initial data when component initializes
    //this.data = this.dashboardDataService.dashboardData;
    this.dashboardDataService.init();
  }

  ngAfterViewInit(): void {
    this.subscription = this.data$?.subscribe((res) => {
      this.top_analytics_cards = res?.top_analytics_cards;
      this.activation_steps = res?.activation_steps || [];
      this.x_rays_triggers = res?.x_rays_triggers || [];
      this.inbox_list = res?.inbox_list || [];
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
