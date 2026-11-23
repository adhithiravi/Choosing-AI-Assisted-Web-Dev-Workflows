import type { ReactNode } from 'react';
import type { Session, Speaker } from '../../types/conference';
import { TRACKS } from '../../types/conference';
import { formatTimeRange } from '../../utils/time';
import styles from './SessionCard.module.css';

export interface SessionCardProps {
  session: Session;
  speakers: Speaker[];
  /** Optional actions rendered in the card footer (for example, buttons). */
  actions?: ReactNode;
  /** Optional content rendered below the footer (for example, a status message). */
  children?: ReactNode;
  className?: string;
}

const LEVEL_LABELS: Record<Session['level'], string> = {
  all: 'All levels',
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

/** Displays one conference session. Used by the schedule and speaker views. */
export function SessionCard({ session, speakers, actions, children, className }: SessionCardProps) {
  const track = TRACKS.find((t) => t.id === session.track);
  const headingId = `session-${session.id}-title`;

  return (
    <article
      className={[styles.card, className].filter(Boolean).join(' ')}
      aria-labelledby={headingId}
      data-track={session.track}
    >
      <div className={styles.meta}>
        <span className={styles.time}>{formatTimeRange(session.start, session.end)}</span>
        <span className={styles.room}>{session.room}</span>
      </div>

      <h3 id={headingId} className={styles.title}>
        {session.title}
      </h3>

      <p className={styles.speakers}>
        {speakers.map((speaker) => speaker.name).join(', ')}
      </p>

      <div className={styles.tags}>
        {track && <span className={styles.trackTag}>{track.label}</span>}
        <span className={styles.tag}>{session.format}</span>
        <span className={styles.tag}>{LEVEL_LABELS[session.level]}</span>
      </div>

      {actions && <div className={styles.actions}>{actions}</div>}
      {children}
    </article>
  );
}
