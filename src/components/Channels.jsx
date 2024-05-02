import { channels } from "../utils/channels";

function Channels() {

  return (
    <div
      className=" flex flex-col z-0 px-8 py-8"
      id="channels"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
    >
      <div className=" font-heading text-heading heading text-center">
        Channels worked with
      </div>

      <div className=" flex flex-col items-center justify-between sm:flex-row sm:flex-wrap lg:mx-auto lg:justify-between lg:px-32 border-white">
        {channels.map((item, index) => {
          return (
            <a href={item.youtubeLink} target="_blank" rel="noreferrer" key={index} className="border-white w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3">
              <img
                src={item.imageLink}
                alt=""
                className=" w-2/4 rounded-lg lg:rounded-md cursor-pointer border-white"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Channels;
