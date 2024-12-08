import Carousel from "../../components/Carousel";
import icons from "../../utils/icons";
import placeholderImage from "../../utils/placeholderImage";

export default function VenueMedia({ media }) {
  if (media.length === 0) {
    const placeholderImg = placeholderImage();
    return (
      <div className="px-[5%] lg:px-[7%] 2xl:px-[15%]">
        <div className="flex items-center w-full ">
          <img
            src={placeholderImg}
            alt="placeholder"
            className="w-full object-cover h-96 lg:screen-minus-15 xl:h-screen-minus-25"
          />
        </div>
      </div>
    );
  }

  return (
    <Carousel
      media={media}
      galleryIcon={icons.galleryIcon}
      chevronLeft={icons.chevronLeft}
      chevronRight={icons.chevronRight}
    />
  );
}
