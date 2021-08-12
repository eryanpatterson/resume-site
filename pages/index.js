import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import banner from '../public/images/ethan2.jpg'
import profile from '../public/images/Ethan.jpg'
import { useState, useEffect } from 'react'
import Social from '../components/social'

export default function Home() {
  const [greetingDiv1, setStyle1] = useState(styles.folded)
  const [greetingDiv2, setStyle2] = useState(styles.folded)
  const [greetingDiv3, setStyle3] = useState(styles.folded)

  useEffect(() => {
    setTimeout(() => {setStyle1(styles.dropped)}, 500)
  })

  useEffect(() => {
    setTimeout(() => {setStyle2(styles.dropped)}, 1000)
  })

  useEffect(() => {
    setTimeout(() => {setStyle3(styles.dropped)}, 1500)
  })

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
          <div className={styles.tagline}><p>JavaScript Developer in Dayton, Ohio</p></div>
        </div>
      </div>
      <div className={styles.greeting}>
        <div className={styles.wrapper}>
        <div className={greetingDiv1}>
          <h2>
            Hi!
          </h2>
          <p>{"I'm a self-taught web developer looking for an opportunity to learn, grow, and contribute to a team."}</p>
        </div>
        <div id='centered' className={greetingDiv2}>
          <h2>I&apos;m</h2>
          <p>a front-end dev who is server and database-curious.
          I have experience with HTML/Css, React, Next.js, and Bootstrap.</p>
        </div>
        <div id='social' className={greetingDiv3}>
          <h2>Ethan</h2>
          <Social />
        </div>
        </div>
      </div>
      
    </Layout>
  )
}
