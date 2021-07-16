import Link from 'next/link';
import styles from './header.module.css'


const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav className={[styles.right, styles.bottom].join(' ')}>
                    <Link href="/">
                        <a className={styles.link}>Home</a>
                    </Link>
                    <Link href="/about">
                        <a className={styles.link}>About</a>
                    </Link>
                    <Link href='/blog'>
                        <a className={styles.link}>Blog</a>
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Header;