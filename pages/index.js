import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Landing from '../components/landing'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [intro, setIntro] = useState(false);
  return (
    <>
      <div className={styles.home}>
        <div style={{maxWidth: "1374px"}}>
          <Header />
          <Landing />
        </div>
      </div>
    </>
  )
}
