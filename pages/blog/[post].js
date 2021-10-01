import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import Date from "../../components/date"
import Layout from "../../components/layout";
import styles from "../../styles/post.module.css"
import Highlight from "react-highlight";

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.post)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {

    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <link rel="stylesheet" href="../../node_modules/highlight.js/styles/atom-one-dark.css"></link>
            </Head>

            <article className={styles.container}>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <Highlight innerHTML={true}>
                    {postData.contentHtml}
                </Highlight>
            </article>
        </Layout>
    )
}