import storage from '../helpers/storage'

export default async function handleLogin(data, navigate, toProfile = false) {
  const headers = {
    'Content-Type': 'application/json',
  }

  try {
    const response = await fetch('https://v2.api.noroff.dev/auth/login', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => null)
      console.error('Index:', response.status, errorData || 'Invalid login')
      return { ok: false, error: errorData || 'Invalid login' }
    }

    const result = await response.json()

    const placeholderAvatar = 'placeholderAvatar.png'
    const placeholderBanner = 'placeholderBanner.png'
    const avatar =
      result.data.avatar.url ===
      'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400'
        ? placeholderAvatar
        : result.data.avatar.url
    const banner =
      result.data.banner.url ===
      'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500'
        ? placeholderBanner
        : result.data.banner.url

    if (result.data) {


      storage.save('profile_name', result.data.name)
      storage.save('profile_avatar', avatar)
      storage.save('profile_banner', banner)
      storage.save('profile_email', result.data.email)
      storage.save('auth_token', result.data.accessToken)
    }

    if (toProfile) {
      navigate('/profile')
    } else {
      navigate(0)
    }

    return { ok: true, data: result }
  } catch (err) {
    console.error('Index:', err.message)
    return { ok: false, error: err.message }
  }
}
