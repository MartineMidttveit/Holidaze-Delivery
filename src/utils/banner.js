import storage from '../api/helpers/storage'

export const banner = (banner) => {
  const storedBanner = storage.get('profile_banner')

  if (banner === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=500&w=1500') return storedBanner

  return banner
}