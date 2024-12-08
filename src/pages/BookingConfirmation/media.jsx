import {Link} from 'react-router-dom'
import placeholderImage from '../../utils/placeholderImage.js'
import {useState} from 'react'

export default function Media({ data }) {
  const [imageUrl, setImageUrl] = useState(
    data?.media[0]?.url ?? placeholderImage()
  )

  return (
    <Link to={`/${data.id}`}>
      <h1 className="text-xl xl:text-2xl font-bold my-1 mt-2">{data.name}</h1>

      <div className="mb-6 flex gap-2">
        <p className="font-medium text-secondary">
          in{' '}
          <span>
            {data.location.city}, {data.location.address}
          </span>
        </p>
      </div>

      <img
        src={imageUrl}
        alt={data?.media[0]?.alt || 'Venue media'}
        className="h-60 w-full rounded object-cover"
        onError={() => setImageUrl(placeholderImage())}
      />
    </Link>
  )
}
