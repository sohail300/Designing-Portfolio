import react from "react";

function Hero() {
  return (
    <main id="main" style={{ display: "flex", justifyContent: "space-around" }}>
      <div id="intro-container" style={{ margin: "40px" }}>
        <img className="hero-img" src={require("./images/intro.png")} alt="png" style={{
          height: "105%",
          width: "100%",
          borderRadius:"8px",
          border: "0px solid white"
        }} />
      </div>
    </main>
  );
}

export default Hero;
