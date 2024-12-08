import storage from "../api/helpers/storage"

export const avatar = (avatar) => {
  const storedAvatar = storage.get('profile_avatar')

  if (avatar === 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=80&h=400&w=400') return storedAvatar

  return avatar
}