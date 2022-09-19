import React from "react";

function Main() {
  return (
    <div className="main-container">
      <div className="main-image-container">
        <picture>
          <source
            srcSet="./images/image-hero-desktop.png"
            media="(min-width: 1440px)"
          />
          <img
            className="main-hero-image"
            src="./images/image-hero-mobile.png"
            alt="snap hero image"
          />
        </picture>
      </div>
      <div className="main-content">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <footer>
          <div>
            <img src="./images/client-databiz.svg" alt="databiz" />
          </div>
          <div>
            <img src="./images/client-audiophile.svg" alt="audiophile" />
          </div>
          <div>
            <img src="./images/client-meet.svg" alt="meet" />
          </div>
          <div>
            <img src="./images/client-maker.svg" alt="maker" />
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Main;
