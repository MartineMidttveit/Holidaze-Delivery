import login from './login'
import {toast} from 'sonner'

export default async function handleRegister(data) {
  const headers = {
    'Content-Type': 'application/json',
  }

  const loginDetails = {
    email: data.email,
    password: data.password,
  }

  try {
    const response = await fetch('https://v2.api.noroff.dev/auth/register', {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Error response:', errorData)
      toast.error(errorData.errors[0].message || 'Failed to register')
    }

    const result = await response.json()

    if (response.ok) {
      const loginUser = await login(loginDetails, true, true)
      window.location.replace('/profile')
      return loginUser
    }
  } catch (err) {
    console.error('error', err.message)
  }
}
