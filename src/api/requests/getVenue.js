export default async function getVenues() {
  const limit = 100
  let allVenues = []
  let page = 1
  let hasMoreData = true

  const MAX_PARALLEL_REQUESTS = 5

  while (hasMoreData) {
    const pagePromises = []

    for (let i = 0; i < MAX_PARALLEL_REQUESTS && hasMoreData; i++) {
      const url = `https://v2.api.noroff.dev/holidaze/venues/?_owner=true&_bookings=true&sort=created&page=${page}&limit=${limit}`
      pagePromises.push(fetch(url).then(res => res.json()))
      page++
    }

    const results = await Promise.all(pagePromises)

    for (let i = 0; i < results.length; i++) {
      const data = results[i]

      if (data.data && data.data.length > 0) {
        allVenues = [...allVenues, ...data.data]
      } else {
        hasMoreData = false
        break
      }
    }
  }

  return allVenues
}
