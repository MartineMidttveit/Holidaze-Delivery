import icons from '../../utils/icons.js'

export default function ImageLinksField({
  imageLinks,
  setImageLinks,
  register,
}) {
  const handleAddImageLink = link => {
    if (link) {
      setImageLinks(prev => [...prev, link])
    }
  }

  const handleRemoveImage = index => {
    setImageLinks(prev => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="flex-col w-full gap-3">
      <label
        htmlFor="imageLinks"
        className="text-sm font-medium text-secondary"
      >
        Image links:
      </label>

      <div className="flex items-center gap-3 mt-2">
        <input
          type="text"
          name="imageLinks"
          id="imageLinks"
          className="w-full px-3 py-2 border border-secondary rounded text-sm md:text-base h-12"
          {...register('imageLinks')}
        />
        <button
          type="button"
          className="text-sm 2xl:text-base rounded px-3 lg:px-8 bg-contrast text-white h-12 flex items-center justify-center gap-2"
          onClick={() => {
            const input = document.getElementById('imageLinks')
            handleAddImageLink(input?.value)
            input.value = ''
          }}
        >
          Upload
        </button>
      </div>

      <div className="grid gap-3 my-6 grid-cols-1 md:grid-cols-2">
        {imageLinks.length === 0 ? (
          <figure className="bg-background h-80 w-full border-2 border-dotted border-secondary border-opacity-40 rounded-md text-secondary flex items-center justify-center">
            <icons.galleryIcon size={38} />
          </figure>
        ) : (
          imageLinks.map((link, index) => (
            <figure
              key={index + 1}
              className="bg-background h-80 w-full relative"
            >
              <button
                type="button"
                onClick={() => handleRemoveImage(index)}
                className="flex items-center justify-center absolute right-3 top-3 bg-white rounded-full h-9 w-9"
              >
                <icons.closeIcon />
              </button>
              <img
                src={link?.url ?? link}
                alt={`Preview ${index}`}
                className="object-cover h-full w-full rounded-md"
              />
            </figure>
          ))
        )}
      </div>
    </div>
  )
}
