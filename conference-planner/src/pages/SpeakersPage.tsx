import type { Session, Speaker } from '../types/conference';
import { formatTimeRange } from '../utils/time';
import styles from './Page.module.css';

interface SpeakersPageProps {
  speakers: Speaker[];
  sessions: Session[];
}

export function SpeakersPage({ speakers, sessions }: SpeakersPageProps) {
  return (
    <section aria-labelledby="speakers-heading">
      <div className={styles.pageHeader}>
        <div>
          <h1 id="speakers-heading" className={styles.pageTitle}>
            Speakers
          </h1>
          <p className={styles.subtitle}>{speakers.length} speakers</p>
        </div>
      </div>

      <ul className={styles.speakerGrid}>
        {speakers.map((speaker) => {
          const talks = sessions.filter((s) => s.speakerIds.includes(speaker.id));
          const initials = speaker.name
            .split(' ')
            .map((part) => part[0])
            .join('');
          return (
            <li key={speaker.id} className={styles.speaker}>
              <span className={styles.avatar} aria-hidden="true">
                {initials}
              </span>
              <div>
                <h2 className={styles.speakerName}>{speaker.name}</h2>
                <p className={styles.speakerRole}>
                  {speaker.role}, {speaker.company}
                </p>
                <ul className={styles.talkList}>
                  {talks.map((talk) => (
                    <li key={talk.id}>
                      <span className={styles.talkTime}>
                        {formatTimeRange(talk.start, talk.end)}
                      </span>{' '}
                      {talk.title}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
