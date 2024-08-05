import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '/src/app/styles/navbar.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li className={router.pathname === '/devTest' ? styles.active : ''}>
          <Link href="/devTest">Developer Test</Link>
        </li>
        <li className={router.pathname === '/devTypes' ? styles.active : ''}>
          <Link href="/devTypes">Developer Types</Link>
        </li>
        <li className={router.pathname === '/about' ? styles.active : ''}>
          <Link href="/about">About</Link>
        </li>
        <li className={router.pathname === '/resources' ? styles.active : ''}>
          <Link href="/resources">Resources</Link>
        </li>
      </ul>
      <div className={styles.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
