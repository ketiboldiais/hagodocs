import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainContent from "./main.mdx"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hago</title>
        <meta name="description" content="Data structures and diagrams library" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hago</h1>
        <MainContent/>
      </main>
    </div>
  )
}

export default Home
