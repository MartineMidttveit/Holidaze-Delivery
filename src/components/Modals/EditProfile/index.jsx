import Modal from '../Modal'
import Button from '../../Button'
import {useEffect, useState} from 'react'
import storage from '../../../api/helpers/storage.js'
import usePutRequest from '../../../hooks/usePutRequest.js'
import Header from './header.jsx'
import Form from './form.jsx'

const placeholderAvatar = 'placeholderAvatar.png'
const placeholderBanner = 'placeholderBanner.png'

function ActionButton({ text, onClick }) {
  return (
    <Button variant="secondary" onClick={onClick}>
      {text}
    </Button>
  )
}

export default function EditProfile({ trigger }) {
  const [enabled, setEnabled] = useState(false)
  const [useDefaultImages, setUseDefaultImages] = useState(false)
  const [avatarLink, setAvatarLink] = useState('')
  const [bannerLink, setBannerLink] = useState('')
  const [avatarPreview, setAvatarPreview] = useState('')
  const [bannerPreview, setBannerPreview] = useState('')
  const name = storage.get('profile_name')
  const avatar = storage.get('profile_avatar') || placeholderAvatar
  const banner = storage.get('profile_banner') || placeholderBanner

  useEffect(() => {
    const isManager = storage.get('user_is_manager') || false
    setEnabled(isManager)
    setAvatarLink(avatar)
    setBannerLink(banner)
    setAvatarPreview(avatar)
    setBannerPreview(banner)
  }, [])

  const { mutate } = usePutRequest(
    `https://v2.api.noroff.dev/holidaze/profiles/${name}`,
    {
      onSuccess: () => {
        window.location.reload()
      },
    }
  )

  const handleSubmit = () => {
 
    const data = {
      venueManager: enabled,
      banner: {
        url:
          useDefaultImages ||
          !bannerLink.trim() ||
          bannerPreview === placeholderBanner
            ? 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500'
            : bannerPreview,
        alt: '',
      },
      avatar: {
        url:
          useDefaultImages ||
          !avatarLink.trim() ||
          avatarPreview === placeholderAvatar
            ? 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400'
            : avatarPreview,
        alt: '',
      },
    }

    storage.save('user_is_manager', data.venueManager)

    if (!useDefaultImages && avatarPreview !== placeholderAvatar) {
      storage.save('profile_avatar', data.avatar.url)
    } else {
      storage.save('profile_avatar', placeholderAvatar)
    }

    if (!useDefaultImages && bannerPreview !== placeholderBanner) {
      storage.save('profile_banner', data.banner.url)
    } else {
      storage.save('profile_banner', placeholderBanner)
    }

    mutate(data)
  }

  return (
    <Modal
      button={trigger}
      actionButton={<ActionButton text="Save Changes" onClick={handleSubmit} />}
      modalStyle="max-h-[93vh] md:!p-0 md:!pb-16 !w-full max-w-[60rem]"
    >
      <Header bannerPreview={bannerPreview} avatarPreview={avatarPreview} />

      <Form
        setUseDefaultImages={setUseDefaultImages}
        placeholderBanner={placeholderBanner}
        useDefaultImages={useDefaultImages}
        avatarLink={avatarLink}
        bannerLink={bannerLink}
        bannerPreview={bannerPreview}
        enabled={enabled}
        setEnabled={setEnabled}
        setBannerLink={setBannerLink}
        setBannerPreview={setBannerPreview}
        placeholderAvatar={placeholderAvatar}
        setAvatarLink={setAvatarLink}
        setAvatarPreview={setAvatarPreview}
      />
    </Modal>
  )
}
