import { bookCover } from "../utils/bookCover";

function Book() {

  return (
    <div
      id="book"
      style={{
        backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
        backgroundPosition: "center",
      }}
      className=" flex flex-col z-0 px-8 pb-8 lg:px-24"
    >
      <div className=" font-heading text-heading heading text-center">
        Book Covers
      </div>
      <div className=" flex flex-col items-center justify-between sm:flex-row sm:flex-wrap lg:px-32 ">
        {bookCover.map((item, index) => {
          return (
            <a href={item.driveLink} target="_blank" rel="noreferrer" key={index} className="w-full sm:w-1/2 px-0 py-4 sm:px-4 lg:w-1/3">
              <img
                src={item.imageLink}
                alt=""
                className=" w-3/4 rounded-lg cursor-pointer lg:rounded-md lg:filter lg:grayscale lg:hover:filter-none"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Book;
