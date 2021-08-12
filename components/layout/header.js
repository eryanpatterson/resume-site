import styles from './headandfoot.module.css'
import { useRouter } from 'next/router';
import Nav from './nav';

const Header = () => {
    
    const router = useRouter()
    const path = router.pathname;
    let pageName = ''

    const pages = ['HOME' , 'ABOUT' , 'BLOG'];
    let headerStyles = [styles.header];

    if (path === '/') {
        pageName = pages[0];
        headerStyles.push(styles.home)
    } else if (path === '/about') {
        pageName = pages[1]
    } else {
        pageName = pages[2]
    }
    


    return (
        <div>
            <header className={headerStyles.join(' ')}>
                <h1 className={styles.heading}>
                    {pageName}
                </h1> 
                <Nav />
            </header>
        </div>
    )
}

export default Header;