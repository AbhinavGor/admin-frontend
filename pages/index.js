import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>THEPC - Admin Dashboard</title>
        <meta name="description" content="THEPC, editorial, twe, literature, journalism" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.hero}>
          <div className={styles.card}>
            <h1>THEPC - Admin Dashboard</h1>
            <Link href="/login"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button></Link>
          </div>
        </div>

      {/* <footer className={styles.footer}>
          &copy;2021-22 The Hindu Education Plus Club, VIT - Vellore.
      </footer> */}
    </>
  )
}
