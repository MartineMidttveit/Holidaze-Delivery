import placeholderImage from "../../utils/placeholderImage";

export default function FigureImage({ media }) {
  const handleImageError = (e) => {
    e.target.src = placeholderImage();
  };

  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={media?.url || placeholderImage()}
        alt={media?.alt ?? "Image of the Venue"}
        className="rounded-lg object-cover h-96 lg:h-80 xl:h-72 2xl:h-96 w-full transform transition-transform duration-300 ease-in-out hover:scale-110 hover:object-center"
        onError={handleImageError}
      />
    </div>
  );
}
