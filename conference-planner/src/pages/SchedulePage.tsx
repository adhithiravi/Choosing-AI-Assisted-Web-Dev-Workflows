import { useMemo, useState } from 'react';
import { SessionCard } from '../components/SessionCard/SessionCard';
import { TrackFilter } from '../components/TrackFilter/TrackFilter';
import type { Session, Speaker, TrackId } from '../types/conference';
import { formatDay, formatTime, groupSessionsByStart } from '../utils/time';
import styles from './Page.module.css';

interface SchedulePageProps {
  sessions: Session[];
  speakersById: Map<string, Speaker>;
}

export function SchedulePage({ sessions, speakersById }: SchedulePageProps) {
  const [track, setTrack] = useState<TrackId | 'all'>('all');

  const slots = useMemo(() => {
    const visible = track === 'all' ? sessions : sessions.filter((s) => s.track === track);
    return groupSessionsByStart(visible);
  }, [sessions, track]);

  const day = sessions[0] ? formatDay(sessions[0].start) : '';

  return (
    <section aria-labelledby="schedule-heading">
      <div className={styles.pageHeader}>
        <div>
          <h1 id="schedule-heading" className={styles.pageTitle}>
            Schedule
          </h1>
          <p className={styles.subtitle}>
            {day} · {sessions.length} sessions · Times shown in Central Time
          </p>
        </div>
        <TrackFilter selected={track} onChange={setTrack} />
      </div>

      {slots.length === 0 && <p className={styles.empty}>No sessions in this track.</p>}

      {slots.map((slot) => (
        <div key={slot.start} className={styles.slot}>
          <h2 className={styles.slotTime}>
            {formatTime(slot.start).split(' ')[0]}
            <small>{formatTime(slot.start).split(' ')[1]}</small>
          </h2>
          <div className={styles.grid}>
            {slot.sessions.map((session) => (
              <SessionCard
                key={session.id}
                session={session}
                speakers={session.speakerIds
                  .map((id) => speakersById.get(id))
                  .filter((s): s is Speaker => Boolean(s))}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
