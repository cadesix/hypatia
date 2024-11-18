'use client'
import ImageStack from '../components/ImageStack'
import styles from './work.module.css'
import Header from '../components/Header'

interface Project {
  images: string[];
  title: string;
  description: string;
  url?: string;
}

const Work = () => {
  const projects: Record<string, Project> = {
    outbox: {
      images: [
        '/workImg/outbox0.png',
        '/workImg/outbox1.png',
        '/workImg/outbox2.png',
        '/workImg/outbox3.png'
      ],
      title: 'Outbox',
      description: 'Tackle your emails one swipe at a time',
      url: 'https://useoutbox.email'
    },
    remi: {
      images: [
        '/workImg/remi0.png',
        '/workImg/remi1.png',
        '/workImg/remi2.png',
        '/workImg/remi3.png'
      ],
      title: 'Remi',
      description: 'Helping creators turn recipes into revenue',
      url: 'https://remi.recipes'
    },
    typesage: {
      images: [
        '/workImg/typesage0.png',
        '/workImg/typesage1.png',
        '/workImg/typesage2.png',
        '/workImg/typesage3.png'
      ],
      title: 'Typesage',
      description: 'Self-Discovery Chatbot',
    },
    discz: {
      images: [
        '/workImg/discz0.png',
        '/workImg/discz1.png',
        '/workImg/discz2.png',
        '/workImg/discz3.png'
      ],
      title: 'Discz',
      description: 'Music + Social',
      url: 'https://apps.apple.com/us/app/discz-discover-share-music/id1521888879'
    }
  }

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.container}>
        <div className={styles.stacksRow}>
          {Object.values(projects).map((project, index) => (
            <div key={index} className={styles.projectContainer}>
              <ImageStack images={project.images} url={project.url} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Work 