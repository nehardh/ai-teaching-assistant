import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">
        Start learning your way.
      </div>
      <h2 className="text-3xl font-bold">
        Build and personalize learning companion
      </h2>
      <p>Pick a name, subject, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
      <Image 
        src="images/cta.svg"
        alt="CTA"
        width={362}
        height={232}
      />
      <Link href="/companions/new">
        <p>+ Build a new companion</p>
      </Link>
    </section>
  )
}

export default CTA