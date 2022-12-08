import React from 'react'
import WelcomeImage from '../gavel.jpg'

const WelcomePage = () => {
  return (
    <>
      <div className="welcome-wrapper">
        <img className="welcome-image" src={WelcomeImage} />
        <div className="title-text-container">
          <div className="title-text">Going Twice. Going Once</div>
          <div className="title-text">Sold to Biddr!</div>
        </div>
      </div>
    </>
  )
}

export default WelcomePage
