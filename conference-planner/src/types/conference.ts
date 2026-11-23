export type TrackId = 'keynote' | 'frontend' | 'ai-tooling' | 'design-systems';

export type SessionFormat = 'keynote' | 'talk' | 'workshop' | 'panel';

export type SessionLevel = 'all' | 'beginner' | 'intermediate' | 'advanced';

export interface Session {
  id: string;
  title: string;
  abstract: string;
  track: TrackId;
  format: SessionFormat;
  level: SessionLevel;
  room: string;
  /** ISO 8601 timestamp with offset, e.g. 2026-03-12T10:00:00-05:00 */
  start: string;
  /** ISO 8601 timestamp with offset. Sessions are half-open intervals: [start, end). */
  end: string;
  speakerIds: string[];
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
}

export interface Track {
  id: TrackId;
  label: string;
}

export const TRACKS: Track[] = [
  { id: 'keynote', label: 'Keynote' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'ai-tooling', label: 'AI & Tooling' },
  { id: 'design-systems', label: 'Design Systems' },
];
