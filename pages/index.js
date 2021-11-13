import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/images/ethan2.jpg'
import Social from '../components/social'
import Projects from '../lib/projects'

export default function Home() {

  return (
    <Layout>
  
      <div className={styles.banner}>
        <Image 
        src={banner} 
        alt="Photo of website builder in park"
        width={1949}
        height={1076}
        priority
        layout='responsive'
        />
        
        <div className={styles.headline}>
          <div className={styles.name}><h1>Ethan Patterson</h1></div>
          <div className={styles.tagline}><p>Web Developer in Dayton, Ohio</p></div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <div className={styles.wrapper}>
            <h2>Hi, there!</h2>
            <p>I'm a full stack web developer with experience using the MERN stack as well as
            PHP and MySQL. I am user-driven and enjoy working on creative, process-oriented teams.</p>
          </div>
        </div>
        <h2>Things I&apos;ve Built</h2>
        <div className={styles.portfolio}>
          <Projects />
        </div>
      </div>
      
    </Layout>
  )
}
