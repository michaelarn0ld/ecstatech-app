import * as React from "react"
import "../styles/Home.scss"
import hero from "../images/hero-graphic.svg"
import Typewriter from "typewriter-effect"

const Home = () => {
  return (
    <div className="home">
      <div className="home-circle-one"></div>
      <div className="home-circle-two"></div>
      <div className="home-circle-three"></div>
      <div className="home-hero">
        <div className="home-hero-subtitle">software made for you</div>
        <div className="home-hero-description">
          {" "}
          We design digital products that are
        </div>
        <div className="home-hero-description keyword">
          <Typewriter
            options={{
              strings: ["intelligent", "converting", "scalable", "disruptive"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="home-hero-action">See our work</div>
      </div>
      <div className="home-graphic">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Home
