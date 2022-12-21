import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Landing from '../components/landing'
import { useState } from 'react'

const inter = Inter({ subsets: ['lato'] })

export default function Home() {

  return (
    <>
      <div className={styles.home}>
        <div className='w-full flex flex-col items-center'>
          <Header current={1}/>
          <Landing />
        </div>
      </div>
    </>
  )
}
