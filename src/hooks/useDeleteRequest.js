import {useMutation} from '@tanstack/react-query'
import axios from 'axios'
import storage from '../api/helpers/storage'

const useDeleteRequest = (url, options = {}) => {
  const token = storage.get('auth_token')
  const formattedToken = token?.replace(/"/g, '')

  const mutation = useMutation({
    mutationFn: async () => {
      const response = await axios.delete(url, {
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

export default useDeleteRequest
