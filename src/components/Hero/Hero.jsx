import react from "react";
import "./Hero.css";

function Hero() {
  return (
    <main>
      <div id="intro-container">
      <img src={require("../images/intro.png")} alt="png" />
      </div>
    </main>
  );
}

export default Hero;
