import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/images/ethan2.jpg'

export default function Home() {

  return (
    <Layout>
  
      <div className={styles.banner}>
        <Image 
        src={banner} 
        alt="Photo of Ethan in park"
        width={2016}
        height={855}
        priority
        layout='responsive'
        />
        
        <div className={styles.headline}>
          <div className={styles.name}><h1>Ethan Patterson</h1></div>
          <div className={styles.tagline}><p>Professional musician in Dayton, Ohio</p></div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.greeting}>
          <div className={styles.wrapper}>
            <h2>Hi, there!</h2>
            <p>I&apos;m a singer, choral conductor, composer, and pianist. I teach voice lessons and am available to perform at events. 
            As a church musician, I have experience planning and leading traditional Protestant and Roman Catholic liturgy
            as well as liturgically-based contemporary worship experiences.</p>
          </div>
        </div>
        <h2>Experience</h2>
        <div className={styles.portfolio}>
          <div>
            <h3>St. John&apos;s Lutheran Church</h3>
            <p>I am currently serving as the Music Director at <br/><a href="http://www.stjohnscovington.org">St. John&apos;s Lutheran Church</a> in Covington, Ohio. I conduct the choir,
            select hymnody, coordinate Psalm cantors and other special music, and fill in on the organ bench when needed.
            I also lead contemporary worship every 5th Sunday in a calendar month. </p>
          </div>
          <div>
            <h3>Missiongathering Christian Church</h3>
            <p>I helped plant and lead Missiongathering Christian Church Thornton, in the Denver metro area, from 2018 to 2020. 
            I started out as an audio engineer and worship coordinator before stepping into the role of worship leader in the summer of 2019.</p>
          </div>
        </div>
      </div>
      
    </Layout>
  )
}
