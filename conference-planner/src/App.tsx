import { useState } from 'react';
import { Header, type Page } from './components/Header/Header';
import { useConferenceData } from './hooks/useConferenceData';
import { SchedulePage } from './pages/SchedulePage';
import { SpeakersPage } from './pages/SpeakersPage';
import styles from './App.module.css';

export default function App() {
  const [page, setPage] = useState<Page>('schedule');
  const { status, error, sessions, speakers, speakersById } = useConferenceData();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header currentPage={page} onNavigate={setPage} />

      <main id="main" className={styles.main}>
        {status === 'loading' && <p role="status">Loading schedule…</p>}
        {status === 'error' && <p role="alert">Couldn't load the schedule: {error}</p>}

        {status === 'ready' && page === 'schedule' && (
          <SchedulePage sessions={sessions} speakersById={speakersById} />
        )}
        {status === 'ready' && page === 'speakers' && (
          <SpeakersPage speakers={speakers} sessions={sessions} />
        )}
      </main>
    </>
  );
}
