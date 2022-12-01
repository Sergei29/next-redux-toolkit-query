import Head from "next/head"

import Link from "next/link"
import styles from "../styles/Home.module.css"

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RTK Demo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Next.js RTK-Query Demo page</h1>
      <h2>take a look at some pokemon</h2>
      <ul>
        <li>
          Bulbasaur <Link href="/pokemon/bulbasaur">dynamic</Link>{" "}
          <Link href="/pokemon/ssr/bulbasaur">SSR</Link>{" "}
          <Link href="/pokemon/ssg/bulbasaur">SSG</Link>
        </li>
        <li>
          Beedrill <Link href="/pokemon/beedrill">dynamic</Link>{" "}
          <Link href="/pokemon/ssr/beedrill">SSR</Link>{" "}
          <Link href="/pokemon/ssg/beedrill"> fallback SSG</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage
