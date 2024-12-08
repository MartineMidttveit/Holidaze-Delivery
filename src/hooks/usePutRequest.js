import {useMutation} from '@tanstack/react-query'
import axios from 'axios'

const usePutRequest = (url, options = {}) => {
  const token = localStorage.getItem('auth_token')
  const formattedToken = token.replace(/"/g, '')

  const mutation = useMutation({
    mutationFn: async data => {
      const response = await axios.put(url, data, {
        headers: {
          Authorization: `Bearer ${formattedToken}`,
          'Content-Type': 'application/json',
          'X-Noroff-API-Key': '178b8358-4af8-4391-a4f1-072a66e27f03',
          ...options.headers,
        },
      })
      return response.data
    },
    onSuccess: options.onSuccess,
    onError: options.onError || (error => console.error('Index:', error)),
  })

  return mutation
}

export default usePutRequest
