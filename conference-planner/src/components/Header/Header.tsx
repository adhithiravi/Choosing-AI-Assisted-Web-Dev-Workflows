import { Button } from '../Button/Button';
import styles from './Header.module.css';

export type Page = 'schedule' | 'speakers';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NAV_ITEMS: { id: Page; label: string }[] = [
  { id: 'schedule', label: 'Schedule' },
  { id: 'speakers', label: 'Speakers' },
];

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo} aria-hidden="true">
            H
          </span>
          <div>
            <p className={styles.name}>Horizon Web Conf 2026</p>
            <p className={styles.where}>March 12 · Chicago, IL</p>
          </div>
        </div>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
