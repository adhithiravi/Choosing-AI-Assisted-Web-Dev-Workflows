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

function HorizonMark() {
  return (
    <svg className={styles.mark} viewBox="0 0 40 40" aria-hidden="true">
      <circle cx="20" cy="22" r="11" fill="var(--color-primary)" />
      <rect x="4" y="22" width="32" height="14" fill="var(--color-ink)" />
      <rect x="6" y="25" width="28" height="2.5" rx="1.25" fill="var(--color-primary)" />
      <rect x="10" y="30" width="20" height="2.5" rx="1.25" fill="var(--color-primary)" opacity="0.6" />
    </svg>
  );
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <HorizonMark />
          <div>
            <p className={styles.name}>Horizon Web Conf</p>
            <p className={styles.where}>March 12, 2026 · Chicago</p>
          </div>
        </div>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={styles.navLink}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
