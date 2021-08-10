import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import styles from "../styles/blog.module.css"

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Blog({ allPostsData }) {
    return (
        <Layout>
            <div className={styles.container}>
            <div className={styles.blurb}>
                <h2>
                    Dispatches from my journey as a dev
                </h2>
                <hr/>
            </div>
            <ul className={styles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li  key={id} className={styles.post}>
                        <Link href={`/blog/${id}`}>
                            <a>{title}</a>
                        </Link>
                        <br />
                        <small>
                            <Date dateString={date} />
                        </small>
                    </li>
                ))}
            </ul>
            </div>
        </Layout>
    )
}