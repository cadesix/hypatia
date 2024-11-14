'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import LogoBanner from './components/LogoBanner'
import Header from './components/Header'
import Link from 'next/link'

export default function Home() {
  const rotatingTexts = ["Drive Growth", "Ship your MVP", "Launch New Verticals", "Find PMF"]
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    '/Statue1.png',
    '/Statue2.png',
    '/Statue3.png',
    '/Statue4.png'
  ];

  const invertedImages = [
    '/StatueInvert1.png',
    '/StatueInvert2.png',
    '/StatueInvert3.png',
    '/StatueInvert4.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length)
    }, 800)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header isHovering={isHovering} />
      <main className={`${styles.main} ${isHovering ? styles.mainHovered : ''}`}>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <Image 
              src={isHovering ? invertedImages[currentImageIndex] : images[currentImageIndex]}
              alt="Statue sequence"
              width={400}
              height={400}
              className={styles.image}
              priority
            />
          </div>

          <div className={styles.contentColumn}>
            <p className={styles.description}>
              Startups backed by <span className={styles.highlight}>a16z</span>, <span className={styles.highlight}>Thrive Capital</span>, <span className={styles.highlight}>YCombinator</span>, and <span className={styles.highlight}>Peter Thiel</span> trust us to drive design & product excellence.
            </p>
            {/* Temporarily using anchor tag for email, but keeping Link structure in comments for future use */}
            {/* <Link 
              href="/work" 
              className={styles.cta}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              see work →
            </Link> */}
            <a 
              href="mailto:cade@hypatia.nyc" 
              className={styles.cta}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              work with us →
            </a>
          </div>
        </div>
      </main>
    </>
  )
} 