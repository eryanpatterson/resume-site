import Link from 'next/link';
import styles from './header.module.css'
import { useRouter } from 'next/router';

const Header = () => {
    
    const router = useRouter()
    const path = router.pathname;
    let pageName = ''

    const pages = ['Home' , 'About' , 'Blog'];

    path === '/' ? pageName = pages[0] : 
        (path === '/about' ? pageName = pages[1] : pageName = pages[2])
    

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.heading}>
                    {pageName}
                </h1>
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