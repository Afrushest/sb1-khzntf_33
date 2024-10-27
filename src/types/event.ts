export type EventType = 'in-person' | 'virtual';

export interface Speaker {
  id: string;
  firstName: string;
  lastName: string;
  position: string;
  photo: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: EventType;
  location?: string;
  theme: string;
  description?: string;
  agenda?: string;
  maxParticipants: number;
  currentParticipants: number;
  hasWaitingList: boolean;
  isPast: boolean;
  visitCount: number;
  speakers?: Speaker[];
}

export type EventInput = Omit<Event, 'id' | 'isPast' | 'visitCount' | 'currentParticipants'>;

export interface EventResponse {
  id: string;
  title: string;
  date: string;
  time: string;
  type: EventType;
  location: string | null;
  theme: string;
  description: string | null;
  agenda: string | null;
  max_participants: number;
  current_participants: number;
  has_waiting_list: boolean;
  is_past: boolean;
  visit_count: number;
}