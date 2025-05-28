import React from 'react'
import {Button} from '../components/ui/button'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import CTA from '@/components/CTA'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard 
          id="1"
          name="Neura the brain explorer"
          topic="Neural network of brain"
          subject="science"
          duration={45}
          color="#A8DADC"
        /><CompanionCard 
          id="1"
          name="Neura the brain explorer"
          topic="Neural network of brain"
          subject="science"
          duration={45}
          color="#FFE5B4"
        />
        <CompanionCard 
          id="1"
          name="Neura the brain explorer"
          topic="Neural network of brain"
          subject="science"
          duration={45}
          color="#DDBDD5"
        />
      </section>
      <section className="home-section">
        <CompanionList 
          title="Recently completed sessions"
          companions={recentSessions}
          className="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page