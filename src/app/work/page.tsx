'use client'
import ImageStack from '../components/ImageStack'
import styles from './work.module.css'
import Header from '../components/Header'

const Work = () => {
  const imageSets = {
    outbox: [
      '/workImg/outbox1.png',
      '/workImg/outbox2.png',
      '/workImg/outbox3.png'
    ],
    remi: [
      '/workImg/remi1.png',
      '/workImg/remi2.png',
      '/workImg/remi3.png'
    ],
    typesage: [
      '/workImg/typesage1.png',
      '/workImg/typesage2.png',
      '/workImg/typesage3.png'
    ],
    discz: [
      '/workImg/discz1.png',
      '/workImg/discz2.png',
      '/workImg/discz3.png'
    ]
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.stacksRow}>
          <ImageStack images={imageSets.outbox} />
          <ImageStack images={imageSets.remi} />
          <ImageStack images={imageSets.typesage} />
          <ImageStack images={imageSets.discz} />
        </div>
      </div>
    </main>
  )
}

export default Work 