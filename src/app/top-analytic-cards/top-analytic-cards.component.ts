import { Component, Input } from '@angular/core';
import { TopAnalyticsCards } from '../interfaces/data-response';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-top-analytic-cards',
  standalone: true,
  imports: [NgIf],
  templateUrl: './top-analytic-cards.component.html',
  styleUrl: './top-analytic-cards.component.scss'
})
export class TopAnalyticCardsComponent {
  @Input() topAnalyticsCards: TopAnalyticsCards | undefined = undefined;
}
