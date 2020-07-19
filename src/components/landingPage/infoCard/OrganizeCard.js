import React from 'react'
import './infoCard.css'

const OrganizeCard = () => {
  return (
    <article className='center info-card'>
      <img
        src='/images/vib-chat.svg'
        alt='Organize those pings that are important, but are not directed at you.'
        data-testid='at-img'
        className='info-img'
        width='150px'
      />
      <h2 className='info-title'>Organize</h2>
      <p className='lighten'>
        Create your own channels, subscriptions to collect those pings that are
        important to you.
      </p>
    </article>
  )
}

export default OrganizeCard
