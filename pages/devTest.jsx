// IMPORTANT NOTE //
// This file is a placeholder for the actual page that will be created in the future.
// The code below is a copy of the index.jsx file with the title changed to "DeveloperTypes".
// The actual content of the page will be added in the future.

import { useState } from 'react';
import Head from 'next/head'
import styles from '/src/app/styles/page.module.css'
import Navbar from './components/navbar.jsx';

export default function DeveloperTest() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">My Next.js App!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a href="https://github.com/vercel/next.js/" className={styles.card}>
            <h3>GitHub &rarr;</h3>
            <p>Explore the Next.js GitHub repository and contribute to the project.</p>
          </a>

          <a href="https://vercel.com/new" className={styles.card}>
            <h3>Deploy &rarr;</h3>
            <p>Deploy your Next.js app with Vercel and start scaling!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Powered by <a href="https://vercel.com">Vercel</a></p>
      </footer>
    </div>
  )
}
