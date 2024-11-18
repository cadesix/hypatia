'use client'
import styles from '../page.module.css'
import Image from 'next/image'

interface HeaderProps {
  isHovering?: boolean;
  variant?: 'work';
}

export default function Header({ isHovering, variant }: HeaderProps) {
  return (
    <nav className={`${styles.nav} ${isHovering ? styles.mainHovered : ''}`}>
      <h1 className={styles.logo}>
        {variant === 'work' ? (
          <>
            <Image 
              src="/Statue3.png"
              alt="Statue icon"
              width={24}
              height={24}
              className={styles.headerIcon}
            />
            product studio
          </>
        ) : (
          '🐐 hypatia.'
        )}
      </h1>
    </nav>
  )
} 