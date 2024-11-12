'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import LogoBanner from './components/LogoBanner'

export default function Home() {
  const rotatingTexts = ["Drive Growth", "Ship your MVP", "Launch New Verticals", "Find PMF"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className={styles.main}>
      <nav className={styles.nav}>
        <h1 className={styles.logo}>hypatia</h1>
      </nav>

      <div className={styles.container}>
        <div className={styles.headerText}>
          <div className={styles.rotatingTextWrapper}>
            <span className={styles.rotatingText}>
              {rotatingTexts[currentTextIndex]}
            </span>
          </div>

          <p className={styles.subtext}>
            with beautiful, native iOS
          </p>
        </div>

        <div className={styles.imageContainer}>
          <Image 
            src="/statue.gif"
            alt="Demo GIF"
            width={200}
            height={200}
            className={styles.image}
          />
        </div>

        <p className={styles.description}>
          We help businesses ship ideas and unlock new revenue streams with beautiful consumer-facing products.
        </p>

        <LogoBanner />
      </div>
    </main>
  )
} 