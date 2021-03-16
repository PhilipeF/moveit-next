import Head from 'next/head';

import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallanges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown';
import { Challangebox } from '../components/Challangebox';

import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CoutdownContext';


export default function Home() {
  return (

    <div className={styles.container}>

      <Head>
        <title> Inicio | moveit </title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallanges />
            <Countdown />
          </div>
          <div>
            <Challangebox />
          </div>
        </section>
      </CountdownProvider>
    </div>

  )
}
