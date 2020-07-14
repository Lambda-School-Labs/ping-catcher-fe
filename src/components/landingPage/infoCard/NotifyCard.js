import React from 'react'
import './infoCard.css'

const NotifyCard = () => {
  return (
    <article className='center info-card'>
      <img
        src='/images/at-solid.svg'
        alt='Catch every ping sent directly to you'
        data-testid='at-img'
        className='info-img'
        width='150px'
      />
      <h2 className='info-title'>Notification</h2>
      <p className='lighten'>
        Never miss a ping directed to you. Snooze it and get right back to work!
      </p>
    </article>
  )
}

export default NotifyCard
