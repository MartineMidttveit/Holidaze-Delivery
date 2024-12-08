import Modal from './Modal'
import icons from '../../utils/icons'
import {useState} from 'react'
import handleLogin from '../../api/post/login'
import InputLabel from '../InputLabel'
import Button from '../Button'
import {Link, useNavigate} from 'react-router-dom'
import CheckboxLabel from '../../components/CheckboxLabel'

export default function LoginModal({
  className,
  text = 'Login',
  outsideClose = true,
}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState)
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    const result = await handleLogin({ email, password }, navigate, true)
    setIsLoading(false)
    window.location.reload()

    if (!result.ok) {
      setError(result.error || 'Invalid email or password. Please try again.')
    }
  }

  return (
    <Modal
      button={
        <button type="button" className={className}>
          {text}
        </button>
      }
      outsideClose={outsideClose}
    >
      <h2 className="md:text-lg lg:text-xl font-bold">Log in:</h2>

      <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 py-6">
        <InputLabel
          name="userEmail"
          type="text"
          label="Email"
          onChange={e => setEmail(e.target.value)}
          pattern="^[\w\-.]+@(stud\.)?noroff\.no$"
          title="Must contain @stud.noroff.no or @noroff.no"
        />

        <div className="flex flex-col relative">
          <div className="flex justify-between items-end pb-3">
            <label
              htmlFor="userPassword"
              className="font-medium text-secondary"
            >
              Password:
            </label>
            <Link
              to="/forgot-password"
              className="text-sm font-semibold text-secondary"
            >
              Forgot password?
            </Link>
          </div>

          <input
            type={showPassword ? 'text' : 'password'}
            id="userPassword"
            name="userPassword"
            className="h-12 border border-secondary rounded px-3"
            onChange={e => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 bottom-0"
            aria-label="Toggle password visibility"
          >
            {showPassword ? <icons.eyeSlashIcon /> : <icons.eyeIcon />}
          </button>
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="py-2">
          <CheckboxLabel name="keepMeLoggedIn" label="Keep me logged in." />
        </div>

        <Button type="submit" className="mt-1" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </form>

      <p>
        Not registered?{' '}
        <Link
          to="/register"
          className="underline text-contrast tracking-wide font-medium"
        >
          Create new user.
        </Link>
      </p>
    </Modal>
  )
}
