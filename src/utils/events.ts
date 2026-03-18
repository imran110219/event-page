import { events } from '../data/events';
import type { EventItem } from '../types/event';
import { isFutureDate, toDateAtLocalMidnight } from './date';

export const getUpcomingEvents = (): EventItem[] =>
  events
    .filter((event) => event.status === 'upcoming' && isFutureDate(event.date))
    .sort(
      (a, b) =>
        toDateAtLocalMidnight(a.date).getTime() - toDateAtLocalMidnight(b.date).getTime()
    );

export const getFeaturedUpcomingEvents = (): EventItem[] =>
  getUpcomingEvents()
    .filter((event) => event.featured)
    .slice(0, 3);
