
const Education = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col-reverse py-8 px-8 items-center lg:flex-row lg:justify-between large:justify-around lg:px-32 "
      id="education"
    >

      <div>
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872077/portfolio/education/about_ivy7bs.png"
          alt=""
          className=" w-full lg:h-80 large:h-96"
        />
      </div>

      <div>

        <div className=" font-heading text-heading mb-8 heading">
          Education
        </div>
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872078/portfolio/education/svg_yywt4z.png"
          alt=""
          className=" w-full lg:h-64 large:h-72"
        />
      </div>
    </div>
  );
};

export default Education;
