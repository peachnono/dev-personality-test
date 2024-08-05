// pages/index.js
import Head from 'next/head'
import styles from '/src/app/styles/page.module.css'
import Navbar from './components/navbar.jsx';
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>The CN Developer Personality Test</title>
        <meta name="description" content="Welcome to my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        "Oh, the places you’ll go!"
        </h1>
        <h3>-Dr.Seuss</h3>
        <p>Discover what kind of developer you could be suited for taking our engaging developer personality test! Uncover your strengths, interests, and career goals while exploring various exciting development paths.</p>
        <button type="button" onClick={() => router.push('/devTest')}>
        Take the Test!
        </button>     
        
      </main>
    </div>
  )
}
