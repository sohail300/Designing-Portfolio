import { thumbnail } from "../utils/thumbnail";

function Thumbnail() {

  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="thumbnails"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Thumbnails
      </div>

      <div className=" flex flex-col items-center sm:flex-row sm:flex-wrap lg:mx-auto lg:justify-between lg:px-32">
        {thumbnail.map((item, index) => {
          return (
            <img
              src={item.imageLink}
              alt=""
              // w-full 
              className=" w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3 rounded-lg lg:rounded-sm "
            />
          );
        })}
      </div>
    </div>
  );
}

export default Thumbnail;
