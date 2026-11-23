import type { TrackId } from '../../types/conference';
import { TRACKS } from '../../types/conference';
import { Button } from '../Button/Button';
import styles from './TrackFilter.module.css';

interface TrackFilterProps {
  selected: TrackId | 'all';
  onChange: (track: TrackId | 'all') => void;
}

export function TrackFilter({ selected, onChange }: TrackFilterProps) {
  const options: { id: TrackId | 'all'; label: string }[] = [
    { id: 'all', label: 'All tracks' },
    ...TRACKS,
  ];

  return (
    <div className={styles.filter} role="group" aria-label="Filter by track">
      {options.map((option) => (
        <Button
          key={option.id}
          variant="secondary"
          size="sm"
          aria-pressed={selected === option.id}
          onClick={() => onChange(option.id)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}
