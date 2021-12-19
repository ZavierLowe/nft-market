import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import NewReleases from '../components/NewReleases'
import PopularCollectionCard from '../components/UI/PopularCollectionCard'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-gray-900'>
     <Navigation/>
     <Hero/>
     <NewReleases/>
     <PopularCollectionCard/>
    </div>
  )
}
