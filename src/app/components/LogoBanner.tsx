'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './LogoBanner.module.css'

export default function LogoBanner() {
  const [logos, setLogos] = useState<string[]>([])

  useEffect(() => {
    // In a real implementation, you'd want to fetch this list dynamically
    // For now, we'll hardcode the logo filenames
    setLogos([
      '/logoRemi.png',
      '/logoWhop.png',
      '/logoYC.png',
      '/logoOutbox.png',
      '/logoDiscz.png',
      '/logoA16z.png',
    ])
  }, [])

  return (
    <div className={styles.banner}>
      <div className={styles.slider}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.slide}>
            <Image
              src={logo}
              alt={`Client logo ${index + 1}`}
              width={100}
              height={50}
              style={{ objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
} 