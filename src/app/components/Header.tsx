'use client'
import styles from '../page.module.css'

interface HeaderProps {
  isHovering?: boolean;
}

export default function Header({ isHovering }: HeaderProps) {
  return (
    <nav className={`${styles.nav} ${isHovering ? styles.mainHovered : ''}`}>
      <h1 className={styles.logo}>🐐 hypatia.</h1>
    </nav>
  )
} 