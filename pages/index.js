import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navigation from '../components/Navigation'
import NewReleases from '../components/NewReleases'
import Product from '../components/Product'
import { ShopAll } from '../components/ShopAll'
import TopCollections from '../components/TopCollections'
import PopularCollectionCard from '../components/UI/PopularCollectionCard'
import Treding from '../components/UI/Treding'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-neutral-900 '>
     <Navigation/>
     <Hero/>
     <NewReleases/>
     <PopularCollectionCard/>
     <Treding/>
     <ShopAll/>
     <TopCollections/>
     <Product/>
    </div>
  )
}
