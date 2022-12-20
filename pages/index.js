import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Landing from '../components/landing'
import { useEffect, useState } from 'react'
import WebFont from 'webfontloader'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    WebFont.load({
      google:{
        families: ['Lato', 'Jost']
      }
    });
  },[])
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
