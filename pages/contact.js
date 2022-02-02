import Layout from "../components/layout";
import styles from "../styles/about.module.css"
export default function Contact() {

    return (
        <Layout>
            <div className={styles.container}>
                <h2>How to reach me:</h2>
                <p>I&apos;m currently accepting new voice students. I&apos;m also available for events, including weddings (service and/or reception) and funerals.
                Inquiries regarding either lessons or event bookings may be made by reaching out to me directly by email, phone, or text message.</p>
                <h3>Phone</h3>
                <p>720-614-1215</p>
                <h3>Email</h3>
                <p>eryanpatterson@gmail.com</p>
            </div>
        </Layout>
    )
}