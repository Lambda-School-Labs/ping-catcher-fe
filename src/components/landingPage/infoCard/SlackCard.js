import React from "react";
import "./infoCard.css";

const SlackCard = () => {
  return (
    <article className='center info-card'>
      <img
        src='/images/slack-hash-brands.svg'
        alt='The communication platform'
        data-testid='at-img'
        className='info-img'
        width='150px'
      />
      <h2 className='info-title'>Slack</h2>
      <p className='lighten'>
        Current version is built for slack. Secured with Okta and fully immersed
        within the Slack api.
      </p>
    </article>
  );
};
export default SlackCard;
