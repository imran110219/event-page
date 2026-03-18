export type EventCategory =
  | 'seminar'
  | 'workshop'
  | 'conference'
  | 'community meetup'
  | 'webinar'
  | 'training session';

export type EventStatus = 'upcoming' | 'cancelled' | 'draft';

export interface EventItem {
  id: string;
  title: string;
  slug: string;
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  category: EventCategory;
  shortDescription: string;
  fullDescription: string;
  featured: boolean;
  registrationUrl: string;
  coverImage: string;
  status: EventStatus;
  limitedSeats?: boolean;
}
