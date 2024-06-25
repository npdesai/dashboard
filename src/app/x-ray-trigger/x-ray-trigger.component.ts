import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { XRaysTrigger } from '../interfaces/data-response';

@Component({
  selector: 'app-x-ray-trigger',
  standalone: true,
  imports: [NgFor],
  templateUrl: './x-ray-trigger.component.html',
  styleUrl: './x-ray-trigger.component.scss',
})
export class XRayTriggerComponent {
  @Input() triggers: XRaysTrigger[] | undefined = [];

  /**
   * Toggles the isChecked property of a trigger object.
   * @param trigger The XRaysTrigger object to toggle.
   */
  toggleChecked(trigger: XRaysTrigger) {
    trigger.isChecked = !trigger.isChecked;
  }
}
