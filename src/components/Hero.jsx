import react from "react";

function Hero() {
  return (
    <main style={{ display: "flex", justifyContent: "space-around" }}>
      <div id="intro-container" style={{ margin: "30px" }}>
        <img src={require("./images/intro.png")} alt="png" style={{
          height: "700px",
          width: "1400px",
          borderRadius:"8px",
          border: "0px solid white"
        }} />
      </div>
    </main>
  );
}

export default Hero;
