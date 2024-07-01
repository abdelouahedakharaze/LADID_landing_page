import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to LADID</h1>
        <p>Share your favorite meals and discover new recipes!</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Post Your Meals</h2>
          <p>Share photos and descriptions of your favorite meals.</p>
        </div>
        <div className="feature">
          <h2>Follow Friends</h2>
          <p>Follow your friends and see what they are eating.</p>
        </div>
        <div className="feature">
          <h2>Discover Recipes</h2>
          <p>Find new recipes and culinary inspirations.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
