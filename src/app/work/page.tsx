'use client'
import { useState } from 'react'
import styles from './work.module.css'
import Header from '../components/Header'

const Work = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <main className={`${styles.main} ${isHovering ? styles.mainHovered : ''}`}>
      <Header isHovering={isHovering} />
      <div className={styles.container}>
        <div className={styles.contentColumn}>

          <div className={styles.linksContainer}>
            <div className={styles.linkColumn}>
              <h2 className={styles.columnHeader}>We've worked with...</h2>
              <a href="#" className={styles.link}>Whop</a>
              <a href="#" className={styles.link}>Atlas</a>
              <a href="#" className={styles.link}>Retro</a>
              <a href="#" className={styles.link}>Vert Ventures</a>
              <a href="#" className={styles.link}>Interscope Records</a>
              <a href="#" className={styles.link}>Janet Jackson</a>
              <a href="#" className={styles.link}>Universal Music Group</a>
            </div>
            <div className={styles.linkColumn}>
              <h2 className={styles.columnHeader}>We've built...</h2>
              <a href="#" className={styles.link}>Remi</a>
              <a href="#" className={styles.link}>Outbox</a>
              <a href="#" className={styles.link}>Discz</a>
              <a href="#" className={styles.link}>Apollo</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Work 