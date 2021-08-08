import styles from "./headandfoot.module.css"
import Social from "./social"

const Footer = () => {

    return (
        <div>
            <footer className={styles.footer}>
                <Social />
            </footer>
        </div>
)}

export default Footer;