import type { Session, Speaker } from '../types/conference';

/**
 * Data access for the conference app.
 *
 * All session and speaker data comes from the conference API. In this starter
 * project the "API" is served as static JSON from /public/api, but components
 * must always go through these functions (or the useConferenceData hook),
 * never import or hardcode session data directly.
 */

const API_BASE = '/api';

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}/${path}`);
  if (!response.ok) {
    throw new Error(`Request to ${path} failed with status ${response.status}`);
  }
  return (await response.json()) as T;
}

export function fetchSessions(): Promise<Session[]> {
  return getJson<Session[]>('sessions.json');
}

export function fetchSpeakers(): Promise<Speaker[]> {
  return getJson<Speaker[]>('speakers.json');
}
