import Link from 'next/link'
import styles from './nav.module.css'
import { useState } from 'react'

const Nav = () => {
    const [nav, setStyle] = useState(styles.nav)
    const [button, setButton] = useState(styles.button)
    const [open, setOpen] = useState(false)

    const btnStyles = [styles.button, styles.open];
    const menuStyle = [styles.nav, styles.open];

    function handleClick() {
        if (!open) {
            setButton(btnStyles.join(' '));
            setStyle(menuStyle.join(' '));
            setOpen(true);
        } else {
            setButton(styles.button)
            setStyle(styles.nav);
            setOpen(false);
        }
    }

    return (
        <div className={nav}>
            <div className={button} onClick={handleClick}>
                <div className={styles.burger}></div>
            </div>
            <div className={styles.dropMenu}>
                <div className={styles.menuItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className={styles.menuItem}>    
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <div className={styles.menuItem}>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </div>
            </div>
            <nav className={styles.navbar}>
                <div className={styles.navbarItem}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </div>
                <div className={styles.navbarItem}>    
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
                <div className={styles.navbarItem}>
                    <Link href='/contact'>
                        <a>Contact</a>
                    </Link>
                </div>
                {/*<div className={styles.navbarItem}>
                    <Link href='/blog'>
                        <a>Blog</a>
                    </Link>
                </div> */}
            </nav>
        </div>
    )
}

export default Nav;