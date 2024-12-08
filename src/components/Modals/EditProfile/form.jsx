import InputLabel from '../../InputLabel.jsx'
import CheckboxLabel from '../../CheckboxLabel.jsx'
import {Switch} from '@headlessui/react'
import {useState} from 'react'

const validateImageURL = async url => {
  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    return false
  }

  try {
    const response = await fetch(url, { method: 'HEAD' })
    const contentType = response.headers.get('content-type')
    return response.ok && contentType?.startsWith('image/')
  } catch {
    return false
  }
}

export default function Form({
  useDefaultImages,
  setUseDefaultImages,
  placeholderAvatar,
  setAvatarPreview,
  avatarLink,
  bannerLink,
  placeholderBanner,
  setBannerPreview,
  setAvatarLink,
  setBannerLink,
  enabled,
  setEnabled,
}) {
  const [avatarError, setAvatarError] = useState('')
  const [bannerError, setBannerError] = useState('')
  const [oldAvatarLink, setOldAvatarLink] = useState('')
  const [oldBannerLink, setOldBannerLink] = useState('')

  const handleAvatarLinkBlur = async e => {
    if (useDefaultImages || e.target.value === '') {
      setAvatarPreview(placeholderAvatar)
      setAvatarError('')
      return
    }

    const isValid = await validateImageURL(avatarLink)
    if (isValid) {
      setAvatarPreview(avatarLink)
      setAvatarError('')
    } else {
      setAvatarPreview(placeholderAvatar)
      setAvatarError('Invalid profile picture URL.')
    }
  }

  const handleBannerLinkBlur = async e => {
    if (useDefaultImages || e.target.value === '') {
      setBannerPreview(placeholderBanner)
      setBannerError('')
      return
    }

    const isValid = await validateImageURL(bannerLink)
    if (isValid) {
      setBannerPreview(bannerLink)
      setBannerError('')
    } else {
      setBannerPreview(placeholderBanner)
      setBannerError('Invalid banner image URL.')
    }
  }

  const handleUseDefaultImagesChange = () => {
    if (!useDefaultImages) {
      setOldAvatarLink(avatarLink)
      setOldBannerLink(bannerLink)

      setAvatarPreview(placeholderAvatar)
      setBannerPreview(placeholderBanner)
      setAvatarLink('')
      setBannerLink('')
      setAvatarError('')
      setBannerError('')
    } else {
      setAvatarLink(oldAvatarLink)
      setBannerLink(oldBannerLink)
      setAvatarPreview(oldAvatarLink || placeholderAvatar)
      setBannerPreview(oldBannerLink || placeholderBanner)
    }
    setUseDefaultImages(!useDefaultImages)
  }

  return (
    <div className="mx-auto max-w-xl space-y-10 pb-8">
      <form className="space-y-5">
        <InputLabel
          label="Profile picture:"
          name="avatar"
          value={avatarLink.includes('png') ? '' : avatarLink}
          onChange={e => setAvatarLink(e.target.value)}
          onBlur={handleAvatarLinkBlur}
        />
        {avatarError && <p className="text-red-500 text-sm">{avatarError}</p>}
        <InputLabel
          label="Banner image:"
          name="banner"
          value={bannerLink.includes('png') ? '' : bannerLink}
          onChange={e => setBannerLink(e.target.value)}
          onBlur={handleBannerLinkBlur}
        />
        {bannerError && <p className="text-red-500 text-sm">{bannerError}</p>}
        <CheckboxLabel
          name="useDefault"
          label="Use default images."
          checked={useDefaultImages}
          onChange={handleUseDefaultImagesChange}
        />
        <div className="space-y-4">
          <label
            htmlFor="is-manager"
            className="text-sm font-medium text-secondary text-left"
          >
            Venue Manager:
          </label>
          <div className="flex items-center gap-6">
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-primary/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#1A73E8]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
              />
            </Switch>
            {enabled ? (
              <p className="text-sm">Enabled</p>
            ) : (
              <p className="text-sm">Disabled</p>
            )}
          </div>
          <p className="text-secondary text-sm 2xl:text-base">
            {enabled
              ? 'As a Venue Manager, you can create, manage, and view bookings for your venues. This role is tailored for hosts managing properties.'
              : 'As a Customer, you can explore, book, and review venues. This role is designed for travelers seeking accommodations.'}
          </p>
        </div>
      </form>
    </div>
  )
}
