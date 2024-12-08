import storage from '../helpers/storage'

export default function logoutUser() {
  storage.remove('auth_token')
  storage.remove('profile_name')
  storage.remove('profile_email')
  window.location.replace('/')
}
