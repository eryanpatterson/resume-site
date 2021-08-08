import Link from 'next/link';
import styles from './headandfoot.module.css'
import { useRouter } from 'next/router';

const Header = () => {
    
    const router = useRouter()
    const path = router.pathname;
    let pageName = ''

    const pages = ['HOME' , 'ABOUT' , 'BLOG'];

    path === '/' ? pageName = pages[0] : 
        (path === '/about' ? pageName = pages[1] : pageName = pages[2])
    

    return (
        <div>
            <header className={styles.header}>
                <h1 className={styles.heading}>
                    {pageName}
                </h1>
                <nav className={styles.nav}>
                    <div className={styles.link}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className={styles.link}>    
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </div>
                    <div className={styles.link}>
                        <Link href='/blog'>
                            <a>Blog</a>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;