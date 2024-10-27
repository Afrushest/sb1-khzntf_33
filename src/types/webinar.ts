import { Speaker } from './event';

export interface Webinar {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'virtual';
  theme: string;
  description?: string;
  agenda?: string;
  maxParticipants: number;
  currentParticipants: number;
  hasWaitingList: boolean;
  isPast: boolean;
  visitCount: number;
  speakers?: Speaker[];
  recordingUrl?: string;
}

export type WebinarInput = Omit<Webinar, 'id' | 'type' | 'isPast' | 'visitCount' | 'currentParticipants'>;

export interface WebinarResponse {
  id: string;
  title: string;
  date: string;
  time: string;
  theme: string;
  description: string | null;
  agenda: string | null;
  max_participants: number;
  current_participants: number;
  has_waiting_list: boolean;
  is_past: boolean;
  visit_count: number;
  recording_url: string | null;
}