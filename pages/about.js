import styles from "../styles/about.module.css"
import Layout from "../components/layout";

export default function About() {


    return (
        <Layout>
            <div className={styles.container}>
                <h1>Performing Experience:</h1>
                <div className={styles.main}>
                    <p>
                        I have a wide range of experience performing in both the classical and pop idiom. I performed the Faure requiem in 2015
                        as a baritone soloist, and I sang Benjamin Britten&apos;s <em>War Requiem</em> as part of the Colorado Symphony Chorus 
                        in the fall of 2018. I also sang Camille Saint-Saen&apos;s Christmas oratorio as a paid chorister in 2017. <br/>
                        Additionally, I have been in a number of bands performing everything from rock to R&B and country.
                    </p>
                </div>
                <h1>Education:</h1>
                <div className={styles.main}>
                    <p>
                        I hold an undergraduate degree in music from Maryville College. During my studies at Maryville, I focused primarily on
                        classical vocal performance along with piano, choral conducting, and music history. 
                        I performed extensively during my undergraduate career both as a member of the college&apos;s vocal ensembles and as a solo vocalist or pianist.
                        My tenure as a member of the College&apos;s Concert Choir, during which I served as the choir&apos;s vice president for one year
                        and as bass section leader for two, was in many ways the bedrock of my performing career during college, deepening a love of choral music
                        that I had discovered in my adolescence. My time as a member of Off Kilter, the college&apos;s SATB chamber choir, and later as student director of
                        the all-male Lads ensemble, sharpened my ear for harmony as well as teaching me the importance of flexibility for the performing musician.
                    </p>
                </div>
                <h1>Teaching</h1>
                <div className={styles.main}>
                    <p>
                        I am currently accepting new voice students, both children and adults. Lessons will take place either at St. John&apos;s Lutheran Church, 
                        200 E. Bridge St. Covington, OH 45318, or in the student&apos;s home. The keys to beneficial voice study are, in my opinion:
                    </p>
                    <ul>
                        <li>
                            <h4>A focus on vocal health</h4>
                            <p>Vocal health will always be far and away my primary focus when working with students. This is for two reasons.
                            First of all, vocal study itself can be physically demanding. Unwitting or careless teachers can and have led their students
                            to damage their voices since time immemorial. This risk is particularly acute with young singers, who often try to make themselves
                            sound older in order to imitate a favorite artist. <br/>
                            Secondly, serious vocal study <em>necesitates</em> vocal health. A healthy sound is a beautiful sound, and the wonderful thing about
                            classical vocal technique is that it gives the student the tools to sing in a healthy way in any genre or style. <br/>
                            <br/>
                            In other words, studying voice is like training for a marathon. On the one hand, you can injure yourself if you don&apos;t make 
                            health a priority. On the other, if you aren&apos;t running in a healthy, sustainable way, you won&apos;t make it very far anyway.</p>
                        </li>
                        <li>
                            <h4>Parental Involvement (For Young Singers)</h4>
                            <p>In the case of young singers, I strongly prefer that parents be present during lessons. The voice is the most complex of all instruments
                            and vocal study can be demanding even for adults studying at the college level and beyond. Furthermore, most of the work of vocal study
                            is done in between lessons, in the student&apos;s own day-to-day practice. Steadfast, nonjudgmental support from parents and others is 
                            monumental when a child is learning a new skill. When the parent has a greater frame of reference for what the child is studying,
                            that capacity for being a support only increases. Half of singing is listening: with an informed parent hearing them practice, 
                            a child has the benefit of four ears, not just two.</p>
                        </li>
                        <li>
                            <h4>Diligence and Discipline</h4>
                            <p>Not every student has aspirations of being the next Bryn Terfel, Anna Netrebko, or Whitney Houston, and that&apos;s just fine. The study
                            of a musical instrument can be a part of a well-rounded education, an enriching experience to benefit one&apos;s mental and emotional well-being,
                            or simply an enjoyable hobby. The benchmark for any of us who study voice is simply this: we should <strong>make sure our a-ttention 
                            matches our in-tention</strong>. Only the student can decide what their goals are and what priority they want to place on their study.
                            Whatever that priority level is, though, it is the student&apos;s responsibility to make sure their level of attention to their study 
                            (i.e. practice habits) matches what their priorities are.</p>
                        </li>
                        <li>
                            <h4>Engagement with Repertoire</h4>
                            <p>The traditional body of western art music serves the purpose of teaching proper singing technique very well. 
                            Much of it also happens to be, to my ears, very beautiful and meaningful. That said, I don&apos;t expect every student to fill their 
                            Spotify playlists with Wagner and Verdi, and the repertoire that we work on should be enjoyable for the student to sing. That means that the
                            journey of singing can involve both exploration of the existing classical repertoire and also bringing classical technique to bear on 
                            repertoire from musical theater, popular music, and so on. Repertoire also depends on what the students goals are; some amount of classical
                            repertoire makes for a good foundation, but we&apos;re not going to spend all our time on opera if the student wants to sing Broadway or jazz.
                            Above all, the music itself should be a motivating factor, not a stumbling block. The goal of bringing a piece to life is what keeps us going
                            when we&apos;re tired or frustrated with some quirk of technique we haven&apos;t yet mastered.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}