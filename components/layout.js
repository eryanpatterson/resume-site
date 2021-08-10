import Header from "./header";
import Footer from "./footer";
import styles from "./layout.module.css"

export default function Layout({ children }) {
    return (
    <div className={styles.pageWrapper}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
    </div>
)}