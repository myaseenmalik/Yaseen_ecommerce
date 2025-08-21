import React from 'react'
import Hero from '../components/Hero'
import LatesrCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import Ourpolicy from '../components/Ourpolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatesrCollection/>
      <BestSeller/>
      <Ourpolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
