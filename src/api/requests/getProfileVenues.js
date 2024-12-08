import storage from '../helpers/storage'

export default async function getProfileVenues(name = '') {
  const token = storage.get('auth_token')
  const url = `https://v2.api.noroff.dev/holidaze/profiles/${name}/venues?_bookings=true&_owner=true`
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      'X-Noroff-API-Key': '178b8358-4af8-4391-a4f1-072a66e27f03',
    },
  }
  )
  const data = await res.json()

  return data.data
}
