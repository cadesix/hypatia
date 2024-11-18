'use client'
import Image from 'next/image'
import styles from './ImageStack.module.css'
import { useState } from 'react'

interface ImageStackProps {
  images: string[]
}

export default function ImageStack({ images }: ImageStackProps) {
  const [isHovering, setIsHovering] = useState(false)

  const getStyles = (index: number, totalImages: number) => {
    const baseOffset = 20
    const hoverOffset = 40
    const baseRotation = 1.5
    const hoverRotation = 2.5
    const baseOpacity = 0.85

    const reversedIndex = totalImages - 1 - index

    if (reversedIndex === 0) {
      return {
        transform: 'rotate(0deg) translate(-50%, -50%)',
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
      opacity: baseOpacity,
      zIndex: reversedIndex,
      left: '50%',
      top: '50%',
      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
    }
  }

  return (
    <div 
      className={styles.stackContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {images.map((image, index) => (
        <div 
          key={index}
          className={styles.imageWrapper}
          style={getStyles(index, images.length)}
        >
          <Image
            src={image}
            alt={`Stack image ${index + 1}`}
            width={1200}
            height={1200}
            className={styles.stackImage}
          />
        </div>
      ))}
    </div>
  )
} 