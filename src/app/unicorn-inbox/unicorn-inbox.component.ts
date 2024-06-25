import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Inbox } from '../interfaces/data-response';

@Component({
  selector: 'app-unicorn-inbox',
  standalone: true,
  imports: [NgFor],
  templateUrl: './unicorn-inbox.component.html',
  styleUrl: './unicorn-inbox.component.scss',
})
export class UnicornInboxComponent {
  @Input() inboxList: Inbox[] | undefined = [];
}
