import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
     <Navigation/>
     <Hero/>
    </div>
  )
}
