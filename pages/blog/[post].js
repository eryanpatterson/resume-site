import Header from "../../components/header";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from 'next/head';
import Date from "../../components/date"
import Footer from "../../components/footer"
import Layout from "../../components/layout";

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
            </Head>

            <article>
                <h1>{postData.title}</h1>
                <div>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
            </article>
        </Layout>
    )
}