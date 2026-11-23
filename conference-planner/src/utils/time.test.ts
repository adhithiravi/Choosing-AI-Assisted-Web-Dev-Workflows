import type { Session } from '../types/conference';
import { durationInMinutes, formatTimeRange, groupSessionsByStart } from './time';

const base: Omit<Session, 'id' | 'start' | 'end' | 'room'> = {
  title: 'Test',
  abstract: '',
  track: 'frontend',
  format: 'talk',
  level: 'all',
  speakerIds: [],
};

describe('time utilities', () => {
  it('formats a range in conference time', () => {
    expect(formatTimeRange('2026-03-12T10:00:00-05:00', '2026-03-12T11:00:00-05:00')).toBe(
      '10:00 AM – 11:00 AM',
    );
  });

  it('calculates duration in minutes', () => {
    expect(durationInMinutes('2026-03-12T10:30:00-05:00', '2026-03-12T11:30:00-05:00')).toBe(60);
  });

  it('groups sessions by start time in chronological order', () => {
    const sessions: Session[] = [
      { ...base, id: 'b', room: 'Room 202', start: '2026-03-12T10:30:00-05:00', end: '2026-03-12T11:30:00-05:00' },
      { ...base, id: 'a', room: 'Hall A', start: '2026-03-12T10:00:00-05:00', end: '2026-03-12T11:00:00-05:00' },
      { ...base, id: 'c', room: 'Room 201', start: '2026-03-12T10:00:00-05:00', end: '2026-03-12T10:45:00-05:00' },
    ];

    const slots = groupSessionsByStart(sessions);
    expect(slots.map((slot) => slot.sessions.map((s) => s.id))).toEqual([['a', 'c'], ['b']]);
  });
});
