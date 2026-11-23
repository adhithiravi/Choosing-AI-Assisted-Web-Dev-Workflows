import { render, screen } from '@testing-library/react';
import type { Session, Speaker } from '../../types/conference';
import { SessionCard } from './SessionCard';

const session: Session = {
  id: 's04',
  title: 'Design Tokens at Scale',
  abstract: '',
  track: 'design-systems',
  format: 'talk',
  level: 'intermediate',
  room: 'Hall A',
  start: '2026-03-12T10:00:00-05:00',
  end: '2026-03-12T11:00:00-05:00',
  speakerIds: ['sp04'],
};

const speakers: Speaker[] = [
  { id: 'sp04', name: 'Lucas Ferreira', role: 'Design Systems Lead', company: 'Fable & Co' },
];

describe('SessionCard', () => {
  it('renders the session as a labelled article', () => {
    render(<SessionCard session={session} speakers={speakers} />);
    expect(screen.getByRole('article', { name: 'Design Tokens at Scale' })).toBeInTheDocument();
    expect(screen.getByText('10:00 AM – 11:00 AM')).toBeInTheDocument();
    expect(screen.getByText('Lucas Ferreira')).toBeInTheDocument();
  });

  it('renders footer actions when provided', () => {
    render(
      <SessionCard session={session} speakers={speakers} actions={<button>Action</button>} />,
    );
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });
});
