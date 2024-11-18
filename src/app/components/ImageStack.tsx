'use client'
import Image from 'next/image'
import styles from './ImageStack.module.css'
import { useState, useEffect } from 'react'

interface ImageStackProps {
  images: string[]
  url?: string
}

export default function ImageStack({ images, url }: ImageStackProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial values
    setWindowWidth(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setIsMobile(window.innerWidth <= 768)
    }
    
    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getStyles = (index: number, totalImages: number) => {
    const baseOffset = windowWidth <= 480 ? 15 : 20
    const hoverOffset = windowWidth <= 480 ? 30 : 40
    const baseRotation = 1.5
    const hoverRotation = 2.5
    const baseOpacity = 0.85

    const reversedIndex = totalImages - 1 - index

    if (reversedIndex === totalImages - 1) {
      return {
        transform: `rotate(-${baseRotation}deg) translate(-50%, ${isHovering ? '-30%' : '-40%'})`,
        opacity: isHovering ? 1 : baseOpacity,
        zIndex: 0,
        left: '50%',
        top: '50%',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }

    if (reversedIndex === 0) {
      return {
        transform: `rotate(${isHovering ? 2 : 0}deg) translate(-50%, -50%)`,
        opacity: 1,
        zIndex: totalImages,
        left: '50%',
        top: '50%',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }
    }

    const isNegative = reversedIndex % 2 === 0
    const xOffset = isNegative ? -baseOffset : baseOffset
    const yOffset = isNegative ? baseOffset : -baseOffset
    const hoverX = isHovering ? (isNegative ? -hoverOffset : hoverOffset) : 0
    const totalXOffset = xOffset + hoverX
    const totalYOffset = yOffset + hoverX

    const rotate = isNegative 
      ? (-baseRotation + (isHovering ? -hoverRotation : 0)) 
      : (baseRotation + (isHovering ? hoverRotation : 0))

    return {
      transform: `rotate(${rotate}deg) translate(calc(-50% + ${totalXOffset}px), calc(-50% + ${totalYOffset}px))`,
      opacity: isHovering ? 1 : baseOpacity,
      zIndex: reversedIndex,
      left: '50%',
      top: '50%',
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  }

  const Content = (
    <div className={isMobile ? styles.mobileContainer : styles.stackContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={!isMobile ? {
        height: '500px',
        filter: isHovering ? 'drop-shadow(0 15px 30px rgba(0,0,0,0.2))' : 'none',
        transition: 'filter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
      } : undefined}
    >
      {isMobile ? (
        <Image
          src={images[images.length - 1]}
          alt="Project image"
          width={300}
          height={200}
          className={styles.mobileImage}
          sizes="(max-width: 768px) 100vw, 300px"
        />
      ) : (
        images.map((image, index) => (
          <div 
            key={index}
            className={styles.imageWrapper}
            style={getStyles(index, images.length)}
          >
            <Image
              src={image}
              alt={`Project image ${index + 1}`}
              width={300}
              height={200}
              className={styles.stackImage}
              sizes="(max-width: 480px) 140px, (max-width: 768px) 200px, 300px"
            />
          </div>
        ))
      )}
    </div>
  )

  return url ? (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.stackLink}>
      {Content}
    </a>
  ) : Content
} 