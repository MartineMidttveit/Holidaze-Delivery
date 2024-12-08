export default function HostDetails({ data, isOwner }) {
  const placeholderAvatar = '/placeholderAvatar.png'

  const avatarUrl = data.owner.avatar?.url || placeholderAvatar

  return (
    <>
      {!isOwner && (
        <div className="flex justify-between items-center xl:mt-2 2xl:mt-0 border-b border-t xl:border-t-0 py-6 border-secondary xl:border-b-0 xl:py-0">
          <div className="flex gap-3 md:gap-5 items-center">
            <img
              src={avatarUrl}
              alt={data.owner.avatar?.alt || 'Host avatar'}
              className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover rounded-full"
              onError={e => (e.target.src = placeholderAvatar)} // Se falhar no carregamento, define o fallback
            />

            <div className="flex flex-col">
              <p className="font-semibold text-sm lg:text-base">Hosted by:</p>
              <p className="text-sm lg:text-base">{data.owner.name}</p>
            </div>
          </div>
          <button
            disabled
            type="button"
            className="text-sm 2xl:text-base rounded px-3 lg:px-8 border border-secondary h-12 2xl:h-14 hover:bg-contrast duration-300 hover:text-white hover:border-contrast flex items-center justify-center"
          >
            Message
            <span className="hidden md:flex ml-1">the host</span>
          </button>
        </div>
      )}
    </>
  )
}
