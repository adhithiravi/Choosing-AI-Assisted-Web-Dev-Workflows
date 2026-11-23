import type { Session } from '../types/conference';

/**
 * All times are displayed in the conference's local time zone,
 * regardless of the attendee's device settings.
 */
export const CONFERENCE_TIME_ZONE = 'America/Chicago';

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: CONFERENCE_TIME_ZONE,
});

const dayFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  timeZone: CONFERENCE_TIME_ZONE,
});

/** "10:00 AM" */
export function formatTime(iso: string): string {
  return timeFormatter.format(new Date(iso));
}

/** "10:00 AM – 11:00 AM" */
export function formatTimeRange(startIso: string, endIso: string): string {
  return `${formatTime(startIso)} – ${formatTime(endIso)}`;
}

/** "Thursday, March 12, 2026" */
export function formatDay(iso: string): string {
  return dayFormatter.format(new Date(iso));
}

/** Duration in whole minutes. */
export function durationInMinutes(startIso: string, endIso: string): number {
  return Math.round((Date.parse(endIso) - Date.parse(startIso)) / 60000);
}

export interface TimeSlot {
  start: string;
  sessions: Session[];
}

/** Groups sessions by start time, sorted chronologically, for the schedule view. */
export function groupSessionsByStart(sessions: Session[]): TimeSlot[] {
  const sorted = [...sessions].sort(
    (a, b) => Date.parse(a.start) - Date.parse(b.start) || a.room.localeCompare(b.room),
  );

  const slots: TimeSlot[] = [];
  for (const session of sorted) {
    const current = slots[slots.length - 1];
    if (current && Date.parse(current.start) === Date.parse(session.start)) {
      current.sessions.push(session);
    } else {
      slots.push({ start: session.start, sessions: [session] });
    }
  }
  return slots;
}
