import { useEffect, useMemo, useState } from 'react';
import { fetchSessions, fetchSpeakers } from '../api/conferenceApi';
import type { Session, Speaker } from '../types/conference';

type Status = 'loading' | 'ready' | 'error';

export interface ConferenceData {
  status: Status;
  error: string | null;
  sessions: Session[];
  speakers: Speaker[];
  speakersById: Map<string, Speaker>;
}

/** Loads sessions and speakers once and exposes them to the app. */
export function useConferenceData(): ConferenceData {
  const [status, setStatus] = useState<Status>('loading');
  const [error, setError] = useState<string | null>(null);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all([fetchSessions(), fetchSpeakers()])
      .then(([sessionData, speakerData]) => {
        if (cancelled) return;
        setSessions(sessionData);
        setSpeakers(speakerData);
        setStatus('ready');
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Unable to load conference data');
        setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const speakersById = useMemo(
    () => new Map(speakers.map((speaker) => [speaker.id, speaker])),
    [speakers],
  );

  return { status, error, sessions, speakers, speakersById };
}
