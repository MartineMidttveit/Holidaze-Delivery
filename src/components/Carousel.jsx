import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import placeholderImage from "../utils/placeholderImage";
import validateImageUrl from "../utils/validateImageUrl";

/**
 * A carousel/slider component for displaying images with navigation controls
 * @param {Object} props - The component props
 * @param {Array} props.media - Array of media objects containing url and alt text
 * @param {Function} props.galleryIcon - Function that returns gallery icon element
 * @param {Function} props.chevronLeft - Function that returns left navigation icon
 * @param {Function} props.chevronRight - Function that returns right navigation icon
 * @param {boolean} [props.hasDots=false] - Whether to show navigation dots
 * @returns {JSX.Element} Rendered carousel component
 */
export default function Carousel({
  media,
  galleryIcon,
  chevronLeft,
  chevronRight,
  hasDots = false,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [imageSources, setImageSources] = useState({});

  const hasMedia = media.length > 0;

  useEffect(() => {
    if (hasMedia) {
      for (let i = 0; i < media.length; i++) {
        const item = media[i];
        validateImageUrl(item.url, (isValid) => {
          setImageSources((prevSources) => ({
            ...prevSources,
            [item.url]: isValid ? item.url : placeholderImage(),
          }));
        });
      }
    } else {
      setImageSources((prevSources) => ({
        ...prevSources,
        placeholder: placeholderImage(),
      }));
    }
  }, [media, hasMedia]);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className="px-[5%] lg:px-[7%] 2xl:px-[15%]">
      <div className="flex items-center w-full relative">
        <div className="absolute z-10 bg-white h-12 2xl:h-14 px-3 text-sm lg:px-6 flex gap-3 justify-center items-center rounded top-[5%] right-[5%] bg-opacity-75">
          {galleryIcon?.(24)}
          {currentSlide + 1} / {media.length === 0 ? 1 : media.length}{" "}
          {media.length > 1 ? "images" : "image"}
        </div>

        {loaded && currentSlide > 0 && (
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute z-50 left-10 rounded-full backdrop-blur bg-background bg-opacity-75 hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center"
            type="button"
          >
            {chevronLeft?.()}
          </button>
        )}

        <div
          key={media.length}
          ref={sliderRef}
          className="keen-slider h-96 md:screen-minus-20 lg:h-screen-minus-40 xl:h-screen-minus-25"
        >
          {hasMedia ? (
            media.map((item) => (
              <div key={item.url} className="keen-slider__slide">
                <img
                  src={imageSources[item.url] || placeholderImage()}
                  alt={item.alt}
                  className="object-cover w-full h-full"
                />
              </div>
            ))
          ) : (
            <div className="keen-slider__slide">
              <img
                src={imageSources.placeholder || placeholderImage()}
                alt="No images available"
                className="object-cover w-full h-full"
              />
            </div>
          )}
        </div>

        {loaded && currentSlide < media.length - 1 && (
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-10 rounded-full backdrop-blur bg-background bg-opacity-75 hover:bg-opacity-100 duration-300 h-8 w-8 xl:h-10 xl:w-10 2xl:h-12 2xl:w-12 flex items-center justify-center"
            type="button"
          >
            {chevronRight?.()}
          </button>
        )}
      </div>

      {loaded && hasDots && (
        <div className="flex items-center gap-1.5 justify-center mt-4">
          {media.map((_, idx) => (
            <button
              type="button"
              key={_}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`size-4 bg-secondary rounded-full ${
                currentSlide === idx ? "bg-primary" : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
