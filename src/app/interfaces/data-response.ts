export interface DataResponse {
  top_analytics_cards: TopAnalyticsCards;
  activation_steps: ActivationStep[];
  x_rays_triggers: XRaysTrigger[];
  inbox_list: Inbox[];
}

export interface TopAnalyticsCards {
  all_time: number;
  send_emails: number;
  open_rate: number;
  click_rate: number;
}

export interface ActivationStep {
  step_title: string;
  icon: string;
  description: string;
  datetime: string;
}

export interface XRaysTrigger {
  id: string;
  name: string;
  status: string;
  leads_from: string;
  audience_name: string;
  isChecked: boolean;
}

export interface Inbox {
  id: string;
  name: string;
  type: string;
  status: string;
  description: string;
}
