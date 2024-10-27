export type RegistrationStatus = 'confirmed' | 'cancelled' | 'waitlist';

export interface RegistrationUserDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  country: string;
}

export interface Registration {
  id: string;
  eventId: string;
  eventType: 'event' | 'webinar';
  userId: string;
  userDetails: RegistrationUserDetails;
  registrationDate: string;
  status: RegistrationStatus;
  cancellationReason?: string;
}

export interface RegistrationResponse {
  id: string;
  event_id: string;
  user_id: string;
  status: RegistrationStatus;
  registration_date: string;
  cancellation_reason: string | null;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  country: string;
}

export interface RegistrationInput {
  eventId: string;
  userDetails: RegistrationUserDetails;
}