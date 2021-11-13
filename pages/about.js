import styles from "../styles/about.module.css"
import Layout from "../components/layout";

export default function About() {


    return (
        <Layout>
            <div className={styles.container}>
                <h1>Experience:</h1>
                <div className={styles.main}>
                    <p>
                        For the last few years, I have worked primarily as a church
                        musician, first as worship leader for a church plant in 
                        Denver, Colorado, and now as music director for a rural Lutheran
                        Church in the Dayton area. Working in a church requires a lot
                        of communication, flexibility, and creative problem-solving,
                        and I will carry that experience with me into my first professional
                        role as a developer. My experience as a church musician has also
                        given me an appreciation, as a user, for web-based tools and platforms
                        like Planning Center and Mailchimp; as I grow and progress as 
                        a developer, I am continually more curious what makes these 
                        applications work.
                        
                    </p>
                </div>
                <h1>Education:</h1>
                <div className={styles.main}>
                    <p>
                        My journey to development has been non-traditional. I hold a 
                        Bachelor of Arts degree in Music from Maryville College, a small
                        liberal-arts school in the Foothills of the Smoky Mountains of Tennessee.
                        In 2020, I completed a Master of Theological Studies degree at Trinity Lutheran
                        Seminary, a graduate school of Capital University in Columbus, Ohio. 
                        As a developer, musician, and theologian, I reject the false dichotomy between
                        creative thinking and analytical thinking. Teams that master the synergy of 
                        creativity and analysis are ulimately the ones who thrive and drive change,
                        both in the marketplace and in society.
                    </p>
                </div>
                <h1>Technologies:</h1>
                <div className={styles.main}>
                    <h2>I have experience with...</h2>
                    <div className={styles.technologies}>
                        
                        <div>                            
                            <h3>Front-end</h3>
                            <ul>
                                <li>React</li>
                                <li>Bootstrap</li>
                                <li>Tailwind CSS</li>
                                <li>Next.js</li>
                            </ul>                            
                            
                            <h3>Back-end</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>Express</li>
                                <li>MongoDb</li>
                                <li>Mongoose</li>
                            </ul>                            
                        </div>
                        <div>
                            <h3>DevOps</h3>
                            <ul>
                                <li>LAMP Stack</li>
                                <li>Digital Ocean</li>
                                <li>Nginx</li>
                                <li>Vercel</li>
                                <li>Heroku</li>
                                <li>Git/Github</li>
                            </ul>
                        </div>   
                    </div>                    
                </div>
            </div>
        </Layout>
    )
}