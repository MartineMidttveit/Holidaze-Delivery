export default function Header({ avatarPreview, bannerPreview }) {
  return (
    <div className="relative flex items-center justify-center flex-col">
      <img
        className="h-48 md:h-72 w-full object-cover"
        src={bannerPreview}
        alt="User banner"
      />
      <img
        className="rounded-full size-64 lg:size-72 border-8 border-white -mt-32 lg:-mt-56 shadow-lg object-cover mb-4"
        src={avatarPreview}
        alt="Profile user avatar"
      />
    </div>
  )
}
