import react from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872117/portfolio/hero-grid_jfaegn.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col-reverse items-center justify-center py-20 md:py-10 lg:flex-row lg:justify-evenly large:py-10"
      id="home"
    >
      <div id="intro-container" style={{ margin: "40px" }}>
        <img className="hero-img" src={require("./images/intro.png")} alt="png" style={{
          height: "105%",
          width: "100%",
          borderRadius: "8px",
        }} />
      </div>
    </div>
  );
}

export default Hero;
