export interface AdminUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'global_admin' | 'country_admin' | 'marketing_admin';
  country?: string; // Optional for global and marketing admins
  permissions: string[];
}

export interface Registration {
  id: string;
  eventId: string;
  eventType: 'event' | 'webinar';
  userId: string;
  userDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    country: string;
  };
  registrationDate: string;
  status: 'confirmed' | 'cancelled' | 'waitlist';
  cancellationReason?: string;
}