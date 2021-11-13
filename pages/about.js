import styles from "../styles/about.module.css"
import Layout from "../components/layout";

export default function About() {


    return (
        <Layout>
            <div className={styles.container}>
                <h1>Experience:</h1>
                <div className={styles.main}>
                    <p>
                        I first started learning HTML, CSS, and JavaScript back in 2015 and taught myself PHP in 2019, but it wasn&apost until
                        2021 that I got serious about building projects. I started learning React in June, and found myself working on full-stack
                        apps within a few months. My learning has been helped by friends who are professional developers, podcasts like Clean Coders
                        and Code Newbie, and the dev community in Dayton, which I&aposve been able to connect with through the Gem City Tech meetup.
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